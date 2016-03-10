var React = require('react')

var PaintMode = {
    FILLED: 'filled',
    EMPTY: 'empty',
    NONE: 'none'
};


module.exports = React.createClass({
    renders: 0,
    when: 0,
    getInitialState: function() {
        return {rate: 0}
    },
    increment: function() {
        this.renders++;
    },
    clear: function() {
        this.renders = 0;
        this.when = (new Date()).getTime();
    },
    componentWillMount: function() {
        this.clear();
        setInterval(this.sampleRenders, 500);
    },
    sampleRenders: function() {
        var oldCount = this.renders;
        var timeDiff = (new Date()).getTime() - this.when;
        this.clear();
        this.setState({rate: oldCount / timeDiff * 1000.0});
    },
    render: function() {
        this.increment();
        return (
            <div>
                Renders per second: {this.state.rate}
            </div>
        )
    }
});
