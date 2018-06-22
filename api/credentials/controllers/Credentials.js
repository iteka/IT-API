'use strict';

/**
 * Credentials.js controller
 *
 * @description: A set of functions called "actions" for managing `Credentials`.
 */

module.exports = {

  /**
   * Retrieve credentials records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.credentials.fetchAll(ctx.query);
  },

  /**
   * Retrieve a credentials record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.credentials.fetch(ctx.params);
  },

  /**
   * Count credentials records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.credentials.count(ctx.query);
  },

  /**
   * Create a/an credentials record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.credentials.add(ctx.request.body);
  },

  /**
   * Update a/an credentials record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.credentials.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an credentials record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.credentials.remove(ctx.params);
  }
};
