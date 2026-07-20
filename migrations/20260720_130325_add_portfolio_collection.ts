import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Collection « portfolio » (fiches références / cas clients créées depuis le
// back-office). Contenu limité au Portfolio : les tables/colonnes
// `pages_formation_content_*` que le générateur ré-émettait ici existent DÉJÀ en
// production (migration 20260709) — elles sont donc volontairement retirées pour
// ne pas provoquer d'erreur « relation already exists ». Le snapshot .json
// associé, lui, reflète bien le schéma complet (formations + portfolio).
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_portfolio_categories" AS ENUM('site-internet', 'formations', 'strategie', 'marketing', 'publicite', 'graphisme');
  CREATE TYPE "public"."enum_portfolio_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_portfolio_promo_kind" AS ENUM('none', 'service', 'formation');
  CREATE TYPE "public"."enum_portfolio_promo_service" AS ENUM('agence-web-strasbourg', 'creation-site-ecommerce', 'maintenance-site-web', 'referencement-strasbourg', 'referencement-ia-geo', 'audit-referencement', 'community-management', 'video-reseaux-sociaux', 'videos-marque-employeur', 'agence-sea', 'marketing-externalise', 'personal-branding');
  CREATE TABLE "portfolio_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_portfolio_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );

  CREATE TABLE "portfolio" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"status" "enum_portfolio_status" DEFAULT 'draft' NOT NULL,
  	"project_type" varchar,
  	"cover_id" integer,
  	"logo_id" integer,
  	"seo_title" varchar,
  	"meta_description" varchar,
  	"noindex" boolean DEFAULT false,
  	"content" jsonb,
  	"promo_kind" "enum_portfolio_promo_kind" DEFAULT 'none',
  	"promo_service" "enum_portfolio_promo_service",
  	"promo_formation" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "portfolio_id" integer;
  ALTER TABLE "portfolio_categories" ADD CONSTRAINT "portfolio_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "portfolio" ADD CONSTRAINT "portfolio_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "portfolio" ADD CONSTRAINT "portfolio_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "portfolio_categories_order_idx" ON "portfolio_categories" USING btree ("order");
  CREATE INDEX "portfolio_categories_parent_idx" ON "portfolio_categories" USING btree ("parent_id");
  CREATE UNIQUE INDEX "portfolio_slug_idx" ON "portfolio" USING btree ("slug");
  CREATE INDEX "portfolio_cover_idx" ON "portfolio" USING btree ("cover_id");
  CREATE INDEX "portfolio_logo_idx" ON "portfolio" USING btree ("logo_id");
  CREATE INDEX "portfolio_updated_at_idx" ON "portfolio" USING btree ("updated_at");
  CREATE INDEX "portfolio_created_at_idx" ON "portfolio" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_portfolio_fk" FOREIGN KEY ("portfolio_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_portfolio_id_idx" ON "payload_locked_documents_rels" USING btree ("portfolio_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolio_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolio" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "portfolio_categories" CASCADE;
  DROP TABLE "portfolio" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_portfolio_fk";
  DROP INDEX "payload_locked_documents_rels_portfolio_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "portfolio_id";
  DROP TYPE "public"."enum_portfolio_categories";
  DROP TYPE "public"."enum_portfolio_status";
  DROP TYPE "public"."enum_portfolio_promo_kind";
  DROP TYPE "public"."enum_portfolio_promo_service";`)
}
