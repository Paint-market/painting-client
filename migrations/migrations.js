
exports.up = function(knex, Promise) {
  console.log('up')
  return knex.schema.createTableIfNotExists('paintings', function (table) {
    console.log('creating table: paintings')
    table.increments('id').primary()    
    table.string('name')
    table.string('image')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('paintings')
    .then(function () {
        process.exit()
    })
}
