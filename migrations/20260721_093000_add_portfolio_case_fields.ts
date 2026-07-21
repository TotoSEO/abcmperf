import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Champs structurés de la fiche portfolio (collection « portfolio ») ajoutés à
// la refonte de la création de fiche : H1, résumé (« le projet en quelques
// mots »), « la demande du client » et « notre réponse » (richText → jsonb), et
// la galerie « visuels de la prestation » (array d'uploads → table dédiée).
// Migration purement additive et idempotente : le champ « content » historique
// et les fiches existantes ne sont pas touchés.
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  CREATE TABLE IF NOT EXISTS "portfolio_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar
  );
  ALTER TABLE "portfolio" ADD COLUMN IF NOT EXISTS "h1" varchar;
  ALTER TABLE "portfolio" ADD COLUMN IF NOT EXISTS "summary" varchar;
  ALTER TABLE "portfolio" ADD COLUMN IF NOT EXISTS "client_request" jsonb;
  ALTER TABLE "portfolio" ADD COLUMN IF NOT EXISTS "our_response" jsonb;
  DO $$ BEGIN
   ALTER TABLE "portfolio_gallery" ADD CONSTRAINT "portfolio_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null; END $$;
  DO $$ BEGIN
   ALTER TABLE "portfolio_gallery" ADD CONSTRAINT "portfolio_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null; END $$;
  CREATE INDEX IF NOT EXISTS "portfolio_gallery_order_idx" ON "portfolio_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_gallery_parent_id_idx" ON "portfolio_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_gallery_image_idx" ON "portfolio_gallery" USING btree ("image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE IF EXISTS "portfolio_gallery" CASCADE;
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "h1";
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "summary";
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "client_request";
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "our_response";`)
}
