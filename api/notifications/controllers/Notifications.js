'use strict';

/**
 * Notifications.js controller
 *
 * @description: A set of functions called "actions" for managing `Notifications`.
 */

module.exports = {

  /**
   * Retrieve notifications records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.notifications.fetchAll(ctx.query);
  },

  /**
   * Retrieve a notifications record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.notifications.fetch(ctx.params);
  },

  /**
   * Count notifications records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.notifications.count(ctx.query);
  },

  /**
   * Create a/an notifications record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.notifications.add(ctx.request.body);
  },

  /**
   * Update a/an notifications record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.notifications.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an notifications record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.notifications.remove(ctx.params);
  }
};
