
var config = require('../knexfile').development
var knex = require('knex')(config)

var Bookshelf = require('bookshelf')(knex)

var Painting = Bookshelf.Model.extend({
  tableName: 'paintings'
})

var Paintings = Bookshelf.Collection.extend({
  model: Painting
})

module.exports = {
  model: Painting,
  collection: Paintings
}
