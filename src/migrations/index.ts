import * as migration_20250214_084126_init from './20250214_084126_init'

export const migrations = [
  {
    up: migration_20250214_084126_init.up,
    down: migration_20250214_084126_init.down,
    name: '20250214_084126_init',
  },
]
