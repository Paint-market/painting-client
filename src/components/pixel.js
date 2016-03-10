var React = require('react')

var PaintMode = {
    FILLED: 'filled',
    EMPTY: 'empty',
    NONE: 'none'
};


module.exports = React.createClass({
    getInitialState: function() {
        return {paint: PaintMode.EMPTY};
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return nextState.paint != this.state.paint;
    },
    paint: function(mode) {
        this.setState({paint: mode});
    },
    handleMouseDown: function(event) {
        var nextState = PaintMode.FILLED;
        if (this.state.paint == PaintMode.FILLED) {
            nextState = PaintMode.EMPTY;
        }
        this.props.startMousePainting(nextState);
        this.props.strokePixel(this.props.x, this.props.y);
    },
    handleMouseUp: function(event) {
        this.props.endMousePainting();
    },
    handleMouseEnter: function(event) {
        this.props.strokePixel(this.props.x, this.props.y);
    },
    render: function() {
        this.props.incrementRenderCount();
        return (
            <div className={
                    'pixel ' +
                    this.state.paint.toLowerCase() +
                    (this.props.startOfRow ? ' start-of-row' : '')}
                 data-x={this.props.x}
                 data-y={this.props.y}
                 onMouseDown={this.handleMouseDown}
                 onMouseLeave={this.handleMouseLeave}
                 onMouseEnter={this.handleMouseEnter} />
        )
    }
});
