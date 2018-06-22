'use strict';

/**
 * Subscriptions.js controller
 *
 * @description: A set of functions called "actions" for managing `Subscriptions`.
 */

module.exports = {

  /**
   * Retrieve subscriptions records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.subscriptions.fetchAll(ctx.query);
  },

  /**
   * Retrieve a subscriptions record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.subscriptions.fetch(ctx.params);
  },

  /**
   * Count subscriptions records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.subscriptions.count(ctx.query);
  },

  /**
   * Create a/an subscriptions record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.subscriptions.add(ctx.request.body);
  },

  /**
   * Update a/an subscriptions record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.subscriptions.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an subscriptions record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.subscriptions.remove(ctx.params);
  }
};
