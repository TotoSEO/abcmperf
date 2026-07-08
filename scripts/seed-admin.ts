/**
 * Crée le premier compte administrateur du back-office.
 *
 *   ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run seed:admin
 *
 * Sans variables, en production, il suffit d'ouvrir /admin la première fois :
 * Payload propose alors l'écran de création du premier utilisateur.
 * Idempotent : ne recrée pas un compte déjà existant.
 */
import { getPayload } from 'payload'
import config from '@payload-config'

const log = (m: string) => process.stderr.write(m + '\n')

const email = process.env.ADMIN_EMAIL || 'admin@abcmperformances.com'
const password = process.env.ADMIN_PASSWORD || 'ChangeMoi!2026'
const name = process.env.ADMIN_NAME || 'Administrateur ABCM'

const payload = await getPayload({ config })

const existing = await payload.find({
  collection: 'users',
  where: { email: { equals: email } },
  limit: 1,
})

if (existing.docs.length) {
  log(`ℹ Compte déjà existant : ${email}`)
} else {
  await payload.create({
    collection: 'users',
    data: { email, password, name, role: 'admin' },
    overrideAccess: true,
  })
  log(`✅ Compte administrateur créé : ${email}`)
}
process.exit(0)
