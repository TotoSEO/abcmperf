-- ============================================================================
--  ABCM — Collection « portfolio » (fiches références / cas clients)
-- ----------------------------------------------------------------------------
--  Ce SQL est FOURNI POUR RÉFÉRENCE / EXÉCUTION MANUELLE dans Supabase
--  (SQL Editor). En temps normal vous N'AVEZ RIEN À LANCER : la migration
--  Payload équivalente (migrations/20260720_130325_add_portfolio_collection.ts)
--  s'applique AUTOMATIQUEMENT au déploiement (prodMigrations dans
--  payload.config.ts). Ce fichier sert uniquement si vous préférez créer les
--  tables à la main avant le déploiement.
--
--  Idempotent : réexécutable sans erreur (IF NOT EXISTS / gardes DO $$).
-- ============================================================================

-- Types énumérés -------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE "public"."enum_portfolio_categories" AS ENUM('site-internet', 'formations', 'strategie', 'marketing', 'publicite', 'graphisme');
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE TYPE "public"."enum_portfolio_status" AS ENUM('draft', 'published');
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE TYPE "public"."enum_portfolio_promo_kind" AS ENUM('none', 'service', 'formation');
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  CREATE TYPE "public"."enum_portfolio_promo_service" AS ENUM('agence-web-strasbourg', 'creation-site-ecommerce', 'maintenance-site-web', 'referencement-strasbourg', 'referencement-ia-geo', 'audit-referencement', 'community-management', 'video-reseaux-sociaux', 'videos-marque-employeur', 'agence-sea', 'marketing-externalise', 'personal-branding');
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- Table des thématiques (select multiple) ------------------------------------
CREATE TABLE IF NOT EXISTS "portfolio_categories" (
  "order" integer NOT NULL,
  "parent_id" integer NOT NULL,
  "value" "enum_portfolio_categories",
  "id" serial PRIMARY KEY NOT NULL
);

-- Table principale -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS "portfolio" (
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

-- Colonne de suivi des verrous de documents (Payload) ------------------------
ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "portfolio_id" integer;

-- Clés étrangères ------------------------------------------------------------
DO $$ BEGIN
  ALTER TABLE "portfolio_categories" ADD CONSTRAINT "portfolio_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  ALTER TABLE "portfolio" ADD CONSTRAINT "portfolio_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  ALTER TABLE "portfolio" ADD CONSTRAINT "portfolio_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_portfolio_fk" FOREIGN KEY ("portfolio_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- Index ----------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS "portfolio_categories_order_idx" ON "portfolio_categories" USING btree ("order");
CREATE INDEX IF NOT EXISTS "portfolio_categories_parent_idx" ON "portfolio_categories" USING btree ("parent_id");
CREATE UNIQUE INDEX IF NOT EXISTS "portfolio_slug_idx" ON "portfolio" USING btree ("slug");
CREATE INDEX IF NOT EXISTS "portfolio_cover_idx" ON "portfolio" USING btree ("cover_id");
CREATE INDEX IF NOT EXISTS "portfolio_logo_idx" ON "portfolio" USING btree ("logo_id");
CREATE INDEX IF NOT EXISTS "portfolio_updated_at_idx" ON "portfolio" USING btree ("updated_at");
CREATE INDEX IF NOT EXISTS "portfolio_created_at_idx" ON "portfolio" USING btree ("created_at");
CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_portfolio_id_idx" ON "payload_locked_documents_rels" USING btree ("portfolio_id");

-- ============================================================================
--  Si vous exécutez ce SQL À LA MAIN, indiquez à Payload que la migration est
--  déjà appliquée pour éviter qu'il ne la rejoue au déploiement :
--
--  INSERT INTO "payload_migrations" ("name", "batch", "updated_at", "created_at")
--  VALUES ('20260720_130325_add_portfolio_collection', 1, now(), now());
-- ============================================================================
