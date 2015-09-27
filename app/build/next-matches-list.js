"use strict";

var NextMatchesList = React.createClass({
  displayName: "NextMatchesList",

  getInitialState: function getInitialState() {
    return { data: [] };
  },

  componentDidMount: function componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (function (data) {
        this.setState({ data: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  },

  render: function render() {
    var matchNodes = this.state.data.map(function (match) {
      return React.createElement(
        "div",
        { className: "match column" },
        React.createElement(NextMatchCard, { data: match })
      );
    });

    return React.createElement(
      "div",
      { className: "nextMatchesList ui three column doubling stackable grid container" },
      matchNodes
    );
  }
});