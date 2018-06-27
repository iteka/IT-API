'use strict';

/**
 * Vpncredentials.js controller
 *
 * @description: A set of functions called "actions" for managing `Vpncredentials`.
 */

module.exports = {

  /**
   * Retrieve vpncredentials records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.vpncredentials.fetchAll(ctx.query);
  },

  /**
   * Retrieve a vpncredentials record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.vpncredentials.fetch(ctx.params);
  },

  /**
   * Count vpncredentials records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.vpncredentials.count(ctx.query);
  },

  /**
   * Create a/an vpncredentials record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.vpncredentials.add(ctx.request.body);
  },

  /**
   * Update a/an vpncredentials record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.vpncredentials.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an vpncredentials record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.vpncredentials.remove(ctx.params);
  }
};
