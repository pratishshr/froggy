"use restrict"

var _ = require('lodash');

module.exports = {

  parse: function (model, query) {
    var parsedUrl = {};

    _.mapKeys(query, function (key, value) {
      _.merge(parsedUrl, params[value](key, model));
    });

    return parsedUrl;
  }
};

var params = [];

params['q'] = function (key, model) {
  var whitelistedAttribute = [];
  var searchQueryBuilder = {$or: []};

  _.forEach(model.attributes, function (attribute) {
    if (attribute.type._length) {
      whitelistedAttribute.push(attribute.fieldName)
    }
  });

  _(whitelistedAttribute).forEach(function (attribute) {
    searchQueryBuilder.$or.push({[attribute]: {$iLike: '%' + key + '%'}})
  });

  return {where: searchQueryBuilder};
};
