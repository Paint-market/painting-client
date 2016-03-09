// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './datastore/dev.sqlite3'
    },
    useNullAsDefault: true
  },
  
  directory: __dirname + '/migrations',

  tableName: 'migrations'

};