var React = require('react')
var ReactDOM = require('react-dom')
// var { Router, Route, browserHistory }  = require('react-router')
var App = require('./components/app')
var domready = require('domready')
var Grid = require('./components/grid')




domready(function () {



  ReactDOM.render((
    <Grid width={200}
          height={200}
          penWidth={2.25} />
  ), document.querySelector('#canvasDiv'))
})
