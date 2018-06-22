'use strict';

/**
 * Consolegroups.js controller
 *
 * @description: A set of functions called "actions" for managing `Consolegroups`.
 */

module.exports = {

  /**
   * Retrieve consolegroups records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.consolegroups.fetchAll(ctx.query);
  },

  /**
   * Retrieve a consolegroups record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.consolegroups.fetch(ctx.params);
  },

  /**
   * Count consolegroups records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.consolegroups.count(ctx.query);
  },

  /**
   * Create a/an consolegroups record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.consolegroups.add(ctx.request.body);
  },

  /**
   * Update a/an consolegroups record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.consolegroups.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an consolegroups record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.consolegroups.remove(ctx.params);
  }
};
