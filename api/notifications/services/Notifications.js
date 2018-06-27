'use strict';

/**
 * Notifications.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all notifications.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('notifications', params);
    // Select field to populate.
    const populate = Notifications.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Notifications
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  },

  /**
   * Promise to fetch a/an notifications.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Notifications.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Notifications
      .findOne(_.pick(params, _.keys(Notifications.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count notifications.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('notifications', params);

    return Notifications
      .count()
      .where(filters.where);
  },

  /**
   * Promise to add a/an notifications.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Notifications.associations.map(ast => ast.alias));
    const data = _.omit(values, Notifications.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Notifications.create(data);

    // Create relational data and return the entry.
    return Notifications.updateRelations({ id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an notifications.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Notifications.associations.map(a => a.alias));
    const data = _.omit(values, Notifications.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Notifications.update(params, data, { multi: true });

    // Update relational data and return the entry.
    return Notifications.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an notifications.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Notifications.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Notifications
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Notifications.associations.map(async association => {
        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  }
};
