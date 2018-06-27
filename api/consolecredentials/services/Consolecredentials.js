'use strict';

/**
 * Consolecredentials.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all consolecredentials.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('consolecredentials', params);
    // Select field to populate.
    const populate = Consolecredentials.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Consolecredentials
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  },

  /**
   * Promise to fetch a/an consolecredentials.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Consolecredentials.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Consolecredentials
      .findOne(_.pick(params, _.keys(Consolecredentials.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count consolecredentials.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('consolecredentials', params);

    return Consolecredentials
      .count()
      .where(filters.where);
  },

  /**
   * Promise to add a/an consolecredentials.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Consolecredentials.associations.map(ast => ast.alias));
    const data = _.omit(values, Consolecredentials.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Consolecredentials.create(data);

    // Create relational data and return the entry.
    return Consolecredentials.updateRelations({ id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an consolecredentials.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Consolecredentials.associations.map(a => a.alias));
    const data = _.omit(values, Consolecredentials.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Consolecredentials.update(params, data, { multi: true });

    // Update relational data and return the entry.
    return Consolecredentials.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an consolecredentials.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Consolecredentials.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Consolecredentials
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Consolecredentials.associations.map(async association => {
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
