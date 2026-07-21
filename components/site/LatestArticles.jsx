import Link from "next/link";
import { SectionHeading, Icon, Button } from "@/components/ds";
import { getAllPosts } from "@/lib/blog";
import { getAllPostsFromPayload } from "@/lib/payload-posts";

// Nombre d'articles affichés sur la home.
const COUNT = 3;

function frDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(d);
}
function withBase(s, base) {
  return typeof s === "string" ? s.split("%ASSET%").join(base) : s;
}

// Derniers articles du blog, en full auto. Payload est la source de vérité (les
// articles créés / publiés dans l'admin remontent) avec repli sur les fichiers.
// Les posts sont déjà triés par date décroissante : un article fraîchement
// publié passe donc automatiquement en premier.
export async function LatestArticles() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const posts = ((await getAllPostsFromPayload()) || getAllPosts()).slice(0, COUNT);
  if (!posts.length) return null;

  return (
    <section className="section articles-wrap" id="blog">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            align="center"
            eyebrow="Le blog"
            title="Les derniers articles du blog"
            description="Tendances, conseils et actualités du marketing digital."
          />
        </div>
        <div className="articles__grid" data-reveal>
          {posts.map((p) => {
            const cover = p.cover ? withBase(p.cover.src, base) : null;
            return (
              <Link key={p.slug} href={`/${p.slug}/`} className="article-card">
                {cover && (
                  <span className="article-card__media">
                    <img src={cover} alt={p.cover?.alt || p.title} loading="lazy" width="760" height="427" />
                  </span>
                )}
                <div className="article-card__body">
                  {p.date && <span className="article-card__date">{frDate(p.date)}</span>}
                  <h3 className="article-card__title">{p.title}</h3>
                  {p.description && <p className="article-card__excerpt">{p.description}</p>}
                  <span className="article-card__link">Lire l'article <Icon name="arrow-right" size={16} /></span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="articles__more" data-reveal>
          <Button as={Link} href="/articles/" variant="outline" iconRight={<Icon name="arrow-right" size={16} />}>
            Tous les articles
          </Button>
        </div>
      </div>
    </section>
  );
}
