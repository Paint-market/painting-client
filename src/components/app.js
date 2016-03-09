var React = require('react')
var Paintings = require('../models/paintings-model').collection
var List = require('./list')
var _ = require('lodash')

module.exports = React.createClass({
  getInitialState: function () {
    return {
      sorted: false,
      paintings: []
    }
  }, 

  componentDidMount: function () {
    Paintings.on('sync', function (paintings) {
      this.setState({ paintings: paintings.toJSON() })
    }.bind(this))

    Paintings.fetch()
  },

  componentWillUnmount: function () {
    //clean up binding between collection and app component
    Paintings.off('sync')
  },

  sort: function () {
    console.log('sort fired!')
    var paintings = this.state.paintings
    var sortedPaintings = this.state.sorted ? _.orderBy(paintings, 'name', 'desc') : _.orderBy(paintings, 'name', 'asc')

    this.setState({ paintings: sortedPaintings, sorted: !this.state.sorted })
  },

  render: function () {
    return (
     <div className='app'>
      <List items={this.state.paintings} sort={this.sort} sorted={this.state.sorted} />
     </div>
    )
  }
