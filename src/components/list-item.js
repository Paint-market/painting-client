var React = require('react')

var imgStyle = {
  height: '200px',
  width: '200px'
}


module.exports = React.createClass({
  
  render: function () {
    return (
      <div className="list-item painting">
        <h2>{ this.props.name }</h2>
        <img style={imgStyle} src={this.props.image} alt={this.props.name} />
      </div>
    )
  
  }

})
