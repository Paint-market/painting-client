var React = require('react')
var ListItem = require('./list-item')

module.exports = React.createClass({
  render: function () {
    var items = this.props.items

    return (
      <div className='list' >
        <div className='sort-list'  onClick={this.props.sort} >{ this.props.sorted ? 'Sort: reverse alphabetical' : 'Sort: alphabetical' }</div>
        {
         items.map(function (item) {
            return <ListItem name={item.name} image={item.image} />   
         })
        }
      </div>
    )
  }
})