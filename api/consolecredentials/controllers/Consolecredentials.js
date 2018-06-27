'use strict';

/**
 * Consolecredentials.js controller
 *
 * @description: A set of functions called "actions" for managing `Consolecredentials`.
 */

module.exports = {

  /**
   * Retrieve consolecredentials records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.consolecredentials.fetchAll(ctx.query);
  },

  /**
   * Retrieve a consolecredentials record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consolecredentials.fetch(ctx.params);
  },

  /**
   * Count consolecredentials records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consolecredentials.count(ctx.query);
  },

  /**
   * Create a/an consolecredentials record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consolecredentials.add(ctx.request.body);
  },

  /**
   * Update a/an consolecredentials record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consolecredentials.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consolecredentials record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consolecredentials.remove(ctx.params);
  }
};
