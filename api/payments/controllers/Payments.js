'use strict';

/**
 * Payments.js controller
 *
 * @description: A set of functions called "actions" for managing `Payments`.
 */

module.exports = {

  /**
   * Retrieve payments records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.payments.fetchAll(ctx.query);
  },

  /**
   * Retrieve a payments record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.payments.fetch(ctx.params);
  },

  /**
   * Count payments records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.payments.count(ctx.query);
  },

  /**
   * Create a/an payments record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.payments.add(ctx.request.body);
  },

  /**
   * Update a/an payments record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.payments.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an payments record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.payments.remove(ctx.params);
  }
};
