'use strict';

/**
 * Games.js controller
 *
 * @description: A set of functions called "actions" for managing `Games`.
 */

module.exports = {

  /**
   * Retrieve games records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.games.fetchAll(ctx.query);
  },

  /**
   * Retrieve a games record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.games.fetch(ctx.params);
  },

  /**
   * Count games records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.games.count(ctx.query);
  },

  /**
   * Create a/an games record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.games.add(ctx.request.body);
  },

  /**
   * Update a/an games record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.games.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an games record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.games.remove(ctx.params);
  }
};
