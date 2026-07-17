import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Champs de contenu structuré des fiches formation (collection « pages ») :
// groupe formationContent (colonnes scalaires) + arrays (objectifs, programme +
// points imbriqués, tarifs, faq). Noms de tables/colonnes identiques à ceux
// générés par l'adaptateur (relevés sur le schéma poussé en dev).
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  CREATE TABLE IF NOT EXISTS "pages_formation_content_objectifs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"objectif" varchar
  );
  CREATE TABLE IF NOT EXISTS "pages_formation_content_programme" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"module" varchar
  );
  CREATE TABLE IF NOT EXISTS "pages_formation_content_programme_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"point" varchar
  );
  CREATE TABLE IF NOT EXISTS "pages_formation_content_tarifs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tarif" varchar
  );
  CREATE TABLE IF NOT EXISTS "pages_formation_content_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"reponse" varchar
  );
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "formation_content_lead" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "formation_content_prix" numeric;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "formation_content_duree" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "formation_content_public" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "formation_content_prerequis" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "formation_content_modalites" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "formation_content_financement" varchar;
  DO $$ BEGIN
   ALTER TABLE "pages_formation_content_objectifs" ADD CONSTRAINT "pages_formation_content_objectifs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null; END $$;
  DO $$ BEGIN
   ALTER TABLE "pages_formation_content_programme" ADD CONSTRAINT "pages_formation_content_programme_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null; END $$;
  DO $$ BEGIN
   ALTER TABLE "pages_formation_content_programme_points" ADD CONSTRAINT "pages_formation_content_programme_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_formation_content_programme"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null; END $$;
  DO $$ BEGIN
   ALTER TABLE "pages_formation_content_tarifs" ADD CONSTRAINT "pages_formation_content_tarifs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null; END $$;
  DO $$ BEGIN
   ALTER TABLE "pages_formation_content_faq" ADD CONSTRAINT "pages_formation_content_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null; END $$;
  CREATE INDEX IF NOT EXISTS "pages_fc_objectifs_order_idx" ON "pages_formation_content_objectifs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_fc_objectifs_parent_id_idx" ON "pages_formation_content_objectifs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_fc_programme_order_idx" ON "pages_formation_content_programme" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_fc_programme_parent_id_idx" ON "pages_formation_content_programme" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_fc_programme_points_order_idx" ON "pages_formation_content_programme_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_fc_programme_points_parent_id_idx" ON "pages_formation_content_programme_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_fc_tarifs_order_idx" ON "pages_formation_content_tarifs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_fc_tarifs_parent_id_idx" ON "pages_formation_content_tarifs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_fc_faq_order_idx" ON "pages_formation_content_faq" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_fc_faq_parent_id_idx" ON "pages_formation_content_faq" USING btree ("_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE IF EXISTS "pages_formation_content_programme_points" CASCADE;
  DROP TABLE IF EXISTS "pages_formation_content_objectifs" CASCADE;
  DROP TABLE IF EXISTS "pages_formation_content_programme" CASCADE;
  DROP TABLE IF EXISTS "pages_formation_content_tarifs" CASCADE;
  DROP TABLE IF EXISTS "pages_formation_content_faq" CASCADE;
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "formation_content_lead";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "formation_content_prix";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "formation_content_duree";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "formation_content_public";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "formation_content_prerequis";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "formation_content_modalites";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "formation_content_financement";`)
}
