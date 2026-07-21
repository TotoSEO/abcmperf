import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Mise en avant « à la une » des fiches portfolio (collection « portfolio ») :
// une case à cocher `featured` (épingle la fiche sur la première ligne de la
// grille) et un rang `featured_rank` (1 → 3) pour ordonner les fiches à la une.
// Migration purement additive et idempotente : les fiches existantes ne sont
// pas modifiées (non épinglées par défaut).
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "portfolio" ADD COLUMN IF NOT EXISTS "featured" boolean DEFAULT false;
  ALTER TABLE "portfolio" ADD COLUMN IF NOT EXISTS "featured_rank" numeric;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "featured";
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "featured_rank";`)
}
