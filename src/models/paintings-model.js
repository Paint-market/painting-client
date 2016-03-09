var BackboneModel = require('backbone-model').Model
var BackboneCollection = require('backbone-collection').Collection
var sync = require('backbone-super-sync')

//enable the backbone-collection module to sync with a REST API
BackboneCollection.prototype.sync = function () {
  return sync.apply(this, arguments)
}

BackboneModel.sync = sync

var Painting = BackboneModel.extend({
  url: '/paintings'
})

var Paintings = BackboneCollection.extend({
  model: Painting,
  url: '/paintings'
})

module.exports = {
  model: Painting,
  collection: new Paintings()
}