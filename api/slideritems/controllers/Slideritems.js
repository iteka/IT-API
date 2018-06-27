'use strict';

/**
 * Slideritems.js controller
 *
 * @description: A set of functions called "actions" for managing `Slideritems`.
 */

module.exports = {

  /**
   * Retrieve slideritems records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.slideritems.fetchAll(ctx.query);
  },

  /**
   * Retrieve a slideritems record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.slideritems.fetch(ctx.params);
  },

  /**
   * Count slideritems records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.slideritems.count(ctx.query);
  },

  /**
   * Create a/an slideritems record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.slideritems.add(ctx.request.body);
  },

  /**
   * Update a/an slideritems record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.slideritems.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an slideritems record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.slideritems.remove(ctx.params);
  }
};
