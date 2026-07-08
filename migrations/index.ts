import * as migration_20260708_103551_initial from './20260708_103551_initial';

export const migrations = [
  {
    up: migration_20260708_103551_initial.up,
    down: migration_20260708_103551_initial.down,
    name: '20260708_103551_initial'
  },
];
