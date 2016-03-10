var React = require('react')
var Paintings = require('../models/paintings-model').collection
var List = require('./list')
var _ = require('lodash')
var Grid = require('./grid')
var SketchPicker = require('react-color').SketchPicker

module.exports = React.createClass({
  getInitialState: function () {
    var paintingData = []

    var randomColour = function(){
      var newColour = "#";
      for (var i=0; i<3; i++) {
        newColour += ("0" + (Math.random()*265|0).toString(16)).substr(-2);   
      }
      return newColour;
    }

    for (var k = 0; k < 10; k++) {
      for (var j = 0; j < 10; j++) {
        paintingData.push(randomColour())
      }
    }
    console.log(paintingData)
    return {
      sorted: false,
      paintings: [],
      paintingData: paintingData
    }
  }, 

  componentDidMount: function () {
    Paintings.on('sync', function (paintings) {
      this.setState({ paintings: paintings.toJSON() })
    }.bind(this))

    Paintings.fetch()
  },

  paintPixel: function (x, y) {

    // convert to flat 
    var paintingData = this.state.paintingData 
    // change the array item
    this.setState({ paintingData: newArray })
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

  handleChange: function (color) {
    console.log(color.hex)
    this.setState({ backgroundColor: color.hex });
  },

  render: function () {
    return (
      <div>
        <SketchPicker onChange={this.handleChange} type="sketch" />
        <div id="canvasDiv">
            <Grid width={10}
            height={10}
            penWidth={2.25}
            paintingData={this.state.paintingData}
             />
        </div>
     </div>
    )
  }
})


