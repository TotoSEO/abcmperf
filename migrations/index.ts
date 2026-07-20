import * as migration_20260708_103551_initial from './20260708_103551_initial';
import * as migration_20260708_134254_add_article_seo_fields from './20260708_134254_add_article_seo_fields';
import * as migration_20260709_090000_add_page_formation_fields from './20260709_090000_add_page_formation_fields';
import * as migration_20260720_130325_add_portfolio_collection from './20260720_130325_add_portfolio_collection';

export const migrations = [
  {
    up: migration_20260708_103551_initial.up,
    down: migration_20260708_103551_initial.down,
    name: '20260708_103551_initial',
  },
  {
    up: migration_20260708_134254_add_article_seo_fields.up,
    down: migration_20260708_134254_add_article_seo_fields.down,
    name: '20260708_134254_add_article_seo_fields',
  },
  {
    up: migration_20260709_090000_add_page_formation_fields.up,
    down: migration_20260709_090000_add_page_formation_fields.down,
    name: '20260709_090000_add_page_formation_fields',
  },
  {
    up: migration_20260720_130325_add_portfolio_collection.up,
    down: migration_20260720_130325_add_portfolio_collection.down,
    name: '20260720_130325_add_portfolio_collection'
  },
];
