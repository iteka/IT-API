'use strict';

/**
 * Demohistory.js controller
 *
 * @description: A set of functions called "actions" for managing `Demohistory`.
 */

module.exports = {

  /**
   * Retrieve demohistory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.demohistory.fetchAll(ctx.query);
  },

  /**
   * Retrieve a demohistory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.demohistory.fetch(ctx.params);
  },

  /**
   * Count demohistory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.demohistory.count(ctx.query);
  },

  /**
   * Create a/an demohistory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.demohistory.add(ctx.request.body);
  },

  /**
   * Update a/an demohistory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.demohistory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an demohistory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.demohistory.remove(ctx.params);
  }
};
