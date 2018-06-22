'use strict';

/**
 * Consolas.js controller
 *
 * @description: A set of functions called "actions" for managing `Consolas`.
 */

module.exports = {

  /**
   * Retrieve consolas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.consolas.fetchAll(ctx.query);
  },

  /**
   * Retrieve a consolas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consolas.fetch(ctx.params);
  },

  /**
   * Count consolas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consolas.count(ctx.query);
  },

  /**
   * Create a/an consolas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consolas.add(ctx.request.body);
  },

  /**
   * Update a/an consolas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consolas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consolas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consolas.remove(ctx.params);
  }
};
