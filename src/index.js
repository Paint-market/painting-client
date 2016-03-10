var React = require('react')
var ReactDOM = require('react-dom')
// var { Router, Route, browserHistory }  = require('react-router')
var App = require('./components/app')
var domready = require('domready')



domready(function () {

  ReactDOM.render((
  	<App />
  ), document.querySelector('#app'))

})



