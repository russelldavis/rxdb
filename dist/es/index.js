/**
 * this is the main entry-point
 * for when the you call "import from 'rxdb'".
 */

export { addRxPlugin } from './plugin';
export * from './rx-database';
export * from './rx-error';
export * from './rx-database-internal-store';
export * from './overwritable';
export * from './rx-collection';
export * from './rx-collection-helper';
export * from './rx-document';
export * from './rx-change-event';
export * from './rx-document-prototype-merge';
export * from './rx-query';
export * from './rx-query-helper';
export * from './rx-schema';
export * from './rx-schema-helper';
export * from './rx-storage-helper';
export * from './rx-storage-statics';
export * from './replication-protocol/index';
export * from './rx-storage-multiinstance';
export * from './custom-index';
export * from './query-planner';
export * from './plugin-helpers';
export * from './plugins/utils';
export * from './hooks';
export * from './query-cache';

/**
 * TODO use export type * from './types';
 * which was introduced into typescript v5.
 * However changing this now would force all RxDB users
 * to update to typescript@5.0.0 so we should
 * change this in late 2023.
 */
//# sourceMappingURL=index.js.map