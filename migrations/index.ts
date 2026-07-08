import * as migration_20260708_103551_initial from './20260708_103551_initial';
import * as migration_20260708_134254_add_article_seo_fields from './20260708_134254_add_article_seo_fields';

export const migrations = [
  {
    up: migration_20260708_103551_initial.up,
    down: migration_20260708_103551_initial.down,
    name: '20260708_103551_initial',
  },
  {
    up: migration_20260708_134254_add_article_seo_fields.up,
    down: migration_20260708_134254_add_article_seo_fields.down,
    name: '20260708_134254_add_article_seo_fields'
  },
];
