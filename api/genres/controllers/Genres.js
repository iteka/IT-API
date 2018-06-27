'use strict';

/**
 * Genres.js controller
 *
 * @description: A set of functions called "actions" for managing `Genres`.
 */

module.exports = {

  /**
   * Retrieve genres records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.genres.fetchAll(ctx.query);
  },

  /**
   * Retrieve a genres record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.genres.fetch(ctx.params);
  },

  /**
   * Count genres records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.genres.count(ctx.query);
  },

  /**
   * Create a/an genres record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.genres.add(ctx.request.body);
  },

  /**
   * Update a/an genres record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.genres.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an genres record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.genres.remove(ctx.params);
  }
};
