'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  Button,
  Modal,
  toast,
  useConfig,
  useDocumentInfo,
  useFormFields,
  useModal,
} from '@payloadcms/ui'

// Bouton « Supprimer… » ajouté aux contrôles du document (articles & pages).
// Ouvre un overlay proposant de créer une redirection 301/302 depuis l'URL du
// document supprimé, PUIS supprime le document. Objectif : ne jamais laisser une
// URL supprimée renvoyer un 404 sec (préservation du SEO).

const MODAL_SLUG = 'abcm-delete-with-redirect'

function sourceUrl(collectionSlug: string | undefined, value: unknown): string {
  const raw = typeof value === 'string' ? value.trim() : ''
  if (!raw) return ''
  if (collectionSlug === 'pages') {
    // Le champ `path` est déjà une URL (ex. /contact/). On normalise les bords.
    let v = raw.startsWith('/') ? raw : `/${raw}`
    if (!v.endsWith('/')) v = `${v}/`
    return v
  }
  // Portfolio : URL publique = /portfolio/slug/.
  if (collectionSlug === 'portfolio') {
    return `/portfolio/${raw.replace(/^\/+|\/+$/g, '')}/`
  }
  // Articles : URL publique = /slug/.
  return `/${raw.replace(/^\/+|\/+$/g, '')}/`
}

// Compare deux chemins en ignorant les slashs de bord (évite qu'une destination
// « /x » ou « x » saisie sans slash final crée une boucle avec la source « /x/ »).
function samePath(a: string, b: string): boolean {
  const strip = (s: string) => s.trim().replace(/^\/+|\/+$/g, '')
  return strip(a) === strip(b)
}

export function DeleteWithRedirect(): React.ReactElement | null {
  const { id, collectionSlug } = useDocumentInfo()
  const { openModal, closeModal } = useModal()
  const { config } = useConfig()
  const router = useRouter()

  const apiRoute = (config?.routes?.api as string) || '/api'
  const adminRoute = (config?.routes?.admin as string) || '/admin'

  // Champ source selon la collection : `path` pour les pages, `slug` pour les articles.
  // On lit la valeur PERSISTÉE (initialValue) et non l'éventuelle valeur éditée
  // non sauvegardée : la redirection doit partir de l'URL réellement en ligne.
  const sourceField = collectionSlug === 'pages' ? 'path' : 'slug'
  const sourceValue = useFormFields(
    ([fields]) =>
      (fields?.[sourceField]?.initialValue ?? fields?.[sourceField]?.value) as string | undefined,
  )
  const from = sourceUrl(collectionSlug, sourceValue)

  const [to, setTo] = React.useState('')
  const [type, setType] = React.useState<'301' | '302'>('301')
  const [busy, setBusy] = React.useState(false)

  // Destination par défaut proposée (modifiable) : liste blog pour un article,
  // accueil pour une page.
  React.useEffect(() => {
    if (collectionSlug === 'pages') setTo('/')
    else if (collectionSlug === 'portfolio') setTo('/portfolio/')
    else setTo('/articles/')
  }, [collectionSlug])

  // Seulement sur un document existant (pas en création).
  if (!id) return null

  const doDelete = async (withRedirect: boolean) => {
    if (busy) return
    const dest = to.trim()

    // Validation en amont (aucune écriture tant que ce n'est pas valide).
    if (withRedirect) {
      if (!from) {
        toast.error('Impossible de déterminer l’URL source (slug/chemin manquant).')
        return
      }
      if (!dest) {
        toast.error('Renseigne une destination pour la redirection.')
        return
      }
      if (samePath(from, dest)) {
        toast.error('La source et la destination sont identiques (créerait une boucle).')
        return
      }
    }

    setBusy(true)
    // Id de la redirection créée ici, pour pouvoir l'annuler si la suppression
    // échoue (on évite ainsi toute redirection orpheline sur un doc encore en ligne).
    let createdRedirectId: string | number | null = null
    try {
      if (withRedirect) {
        // Une redirection existe-t-elle déjà pour cette URL ? (contrôle explicite
        // plutôt que de deviner à partir du message d'erreur d'unicité).
        const check = await fetch(
          `${apiRoute}/redirects?where[from][equals]=${encodeURIComponent(from)}&limit=1&depth=0`,
          { credentials: 'include' },
        )
        const checkData = check.ok ? await check.json().catch(() => null) : null
        const alreadyExists = Array.isArray(checkData?.docs) && checkData.docs.length > 0

        if (!alreadyExists) {
          const res = await fetch(`${apiRoute}/redirects`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from, to: dest, type }),
          })
          if (!res.ok) {
            toast.error('Échec de la création de la redirection — suppression annulée.')
            setBusy(false)
            return
          }
          const created = await res.json().catch(() => null)
          createdRedirectId = created?.doc?.id ?? created?.id ?? null
        }
      }

      const del = await fetch(`${apiRoute}/${collectionSlug}/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      if (!del.ok) {
        // Annule la redirection qu'on venait de créer, pour ne pas la laisser
        // pointer depuis une URL toujours en ligne.
        if (createdRedirectId != null) {
          await fetch(`${apiRoute}/redirects/${createdRedirectId}`, {
            method: 'DELETE',
            credentials: 'include',
          }).catch(() => {})
        }
        toast.error('Échec de la suppression du document.')
        setBusy(false)
        return
      }

      toast.success(
        withRedirect ? 'Document supprimé et redirection en place.' : 'Document supprimé.',
      )
      closeModal(MODAL_SLUG)
      router.push(`${adminRoute}/collections/${collectionSlug}`)
    } catch {
      toast.error('Une erreur est survenue.')
      setBusy(false)
    }
  }

  return (
    <React.Fragment>
      <Button
        buttonStyle="secondary"
        size="small"
        onClick={() => openModal(MODAL_SLUG)}
      >
        Supprimer…
      </Button>

      <Modal slug={MODAL_SLUG} className="abcm-delredir">
        <div className="abcm-delredir__panel">
          <h2 className="abcm-delredir__title">Supprimer et rediriger</h2>
          <p className="abcm-delredir__intro">
            Tu supprimes&nbsp;: <code>{from || '—'}</code>. Pour préserver le SEO, crée une
            redirection vers une autre page (recommandé).
          </p>

          <label className="abcm-delredir__label" htmlFor="abcm-delredir-to">
            Rediriger vers
          </label>
          <input
            id="abcm-delredir-to"
            className="abcm-delredir__input"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="/nouvelle-page/"
          />

          <label className="abcm-delredir__label" htmlFor="abcm-delredir-type">
            Type
          </label>
          <select
            id="abcm-delredir-type"
            className="abcm-delredir__input"
            value={type}
            onChange={(e) => setType(e.target.value as '301' | '302')}
          >
            <option value="301">301 — permanent (recommandé)</option>
            <option value="302">302 — temporaire</option>
          </select>

          <div className="abcm-delredir__actions">
            <Button buttonStyle="secondary" size="small" disabled={busy} onClick={() => closeModal(MODAL_SLUG)}>
              Annuler
            </Button>
            <Button buttonStyle="secondary" size="small" disabled={busy} onClick={() => doDelete(false)}>
              Supprimer sans redirection
            </Button>
            <Button buttonStyle="primary" size="small" disabled={busy} onClick={() => doDelete(true)}>
              Supprimer et rediriger
            </Button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  )
}
