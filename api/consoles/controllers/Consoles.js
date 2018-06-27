'use strict';

/**
 * Consoles.js controller
 *
 * @description: A set of functions called "actions" for managing `Consoles`.
 */

module.exports = {

  /**
   * Retrieve consoles records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.consoles.fetchAll(ctx.query);
  },

  /**
   * Retrieve a consoles record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consoles.fetch(ctx.params);
  },

  /**
   * Count consoles records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consoles.count(ctx.query);
  },

  /**
   * Create a/an consoles record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consoles.add(ctx.request.body);
  },

  /**
   * Update a/an consoles record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consoles.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consoles record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consoles.remove(ctx.params);
  }
};
