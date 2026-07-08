import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" ADD COLUMN "content_edited" boolean DEFAULT false;
  ALTER TABLE "articles" ADD COLUMN "edited_in_admin" boolean DEFAULT false;
  ALTER TABLE "articles" ADD COLUMN "legacy_modified" timestamp(3) with time zone;
  ALTER TABLE "articles" ADD COLUMN "legacy_cover_src" varchar;
  ALTER TABLE "_articles_v" ADD COLUMN "version_content_edited" boolean DEFAULT false;
  ALTER TABLE "_articles_v" ADD COLUMN "version_edited_in_admin" boolean DEFAULT false;
  ALTER TABLE "_articles_v" ADD COLUMN "version_legacy_modified" timestamp(3) with time zone;
  ALTER TABLE "_articles_v" ADD COLUMN "version_legacy_cover_src" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" DROP COLUMN "content_edited";
  ALTER TABLE "articles" DROP COLUMN "edited_in_admin";
  ALTER TABLE "articles" DROP COLUMN "legacy_modified";
  ALTER TABLE "articles" DROP COLUMN "legacy_cover_src";
  ALTER TABLE "_articles_v" DROP COLUMN "version_content_edited";
  ALTER TABLE "_articles_v" DROP COLUMN "version_edited_in_admin";
  ALTER TABLE "_articles_v" DROP COLUMN "version_legacy_modified";
  ALTER TABLE "_articles_v" DROP COLUMN "version_legacy_cover_src";`)
}
