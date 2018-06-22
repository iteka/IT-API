'use strict';

/**
 * Consolasgames.js controller
 *
 * @description: A set of functions called "actions" for managing `Consolasgames`.
 */

module.exports = {

  /**
   * Retrieve consolasgames records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.consolasgames.fetchAll(ctx.query);
  },

  /**
   * Retrieve a consolasgames record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consolasgames.fetch(ctx.params);
  },

  /**
   * Count consolasgames records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consolasgames.count(ctx.query);
  },

  /**
   * Create a/an consolasgames record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consolasgames.add(ctx.request.body);
  },

  /**
   * Update a/an consolasgames record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consolasgames.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consolasgames record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consolasgames.remove(ctx.params);
  }
};
