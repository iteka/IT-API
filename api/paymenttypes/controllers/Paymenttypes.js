'use strict';

/**
 * Paymenttypes.js controller
 *
 * @description: A set of functions called "actions" for managing `Paymenttypes`.
 */

module.exports = {

  /**
   * Retrieve paymenttypes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.paymenttypes.fetchAll(ctx.query);
  },

  /**
   * Retrieve a paymenttypes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.paymenttypes.fetch(ctx.params);
  },

  /**
   * Count paymenttypes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.paymenttypes.count(ctx.query);
  },

  /**
   * Create a/an paymenttypes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.paymenttypes.add(ctx.request.body);
  },

  /**
   * Update a/an paymenttypes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.paymenttypes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an paymenttypes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.paymenttypes.remove(ctx.params);
  }
};
