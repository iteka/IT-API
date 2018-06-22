'use strict';

/**
 * Consolesubscriptions.js controller
 *
 * @description: A set of functions called "actions" for managing `Consolesubscriptions`.
 */

module.exports = {

  /**
   * Retrieve consolesubscriptions records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.consolesubscriptions.fetchAll(ctx.query);
  },

  /**
   * Retrieve a consolesubscriptions record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consolesubscriptions.fetch(ctx.params);
  },

  /**
   * Count consolesubscriptions records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consolesubscriptions.count(ctx.query);
  },

  /**
   * Create a/an consolesubscriptions record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consolesubscriptions.add(ctx.request.body);
  },

  /**
   * Update a/an consolesubscriptions record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consolesubscriptions.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consolesubscriptions record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consolesubscriptions.remove(ctx.params);
  }
};
