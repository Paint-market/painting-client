var express = require('express')
var router = express.Router()
var Paintings = require('../models/paintings-model').collection
var Painting = require('../models/paintings-model').model



router.route('/paintings')
  .get(function (req, res) {
    Paintings.forge().fetch()
      .then(function (collection) {
        res.json(collection.toJSON())
      })
      .catch(function (err) {
        res.json({ error: true, data: { msg: err.message } })
      })
  })
  .post(function (req, res) {
    Painting.forge({
        name: req.body.name,
        image: req.body.image
      })
      .save()
      .then(function (painting) {
        res.json({ id: painting.get('id') })
      })
      .catch(function (err) {
        res.json({ error: true, data: { msg: err.message } })
      })
  })

router.route('/paintings/:id')
  .get(function (req, res) {
    Paintings.forge().query({ where: { id: req.params.id } })
      .fetchOne()
      .then(function (painting) {
          res.json(painting.toJSON())
      })
      .catch(function (err) {
          res.json({ error: true, data: { msg: er.message } })
      })
  })
  .put(function (req, res) {
    Paintings.forge().query({ where: { id: req.params.id } })
    .fetchOne()
    .then(function (painting) {
      painting.save({
        name: req.body.name || painting.get('name'),
        image: req.body.image || painting.get('image')
      })
        .then(function (painting) {
          res.json(painting.toJSON())
        })
        .catch(function (err) {
          res.json({ error: true, data: { message: err.message } })
        })
    })
    .catch(function (err) {
      res.json({ error: true, data: { message: err.message } })
    })
  })
  .delete(function (req, res) {
    Paintings.forge().query({ where: { id: req.params.id } })
      .fetchOne()
      .then(function (painting) {
        painting.destroy()
          .then(function () {
            res.json( { error: false, data: { message: 'painting destroyed!' } })
          })
          .catch(function (err) {
            res.json({ error: true, data: { message: err.message } })
          })
      })
      .catch(function (err) {
        res.json({ error: true, data: { message: err.message } })
      })
  })

module.exports = router
