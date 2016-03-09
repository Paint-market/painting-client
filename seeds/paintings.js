var paintings = require('../datastore/seed-paintings')

exports.seed = function(knex, Promise) {
  var paintingPromises = []

  paintings.forEach(function (painting) {
    paintingPromises.push(createPainting(knex, painting))
  })

  return Promise.all(paintingPromises)
}

function createPainting (knex, painting) {
  return knex.table('paintings')
    .insert(painting)
}
