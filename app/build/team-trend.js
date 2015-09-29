"use strict";

var TeamTrend = React.createClass({
	displayName: "TeamTrend",

	getResultColor: function getResultColor(result) {
		switch (result) {
			case "W":
				return "green";
			case "L":
				return "red";
			case "D":
				return "yellow";
			default:
				return "";
		}
	},

	getResultLetter: function getResultLetter(result) {
		switch (result) {
			case "W":
				return "S";
			case "L":
				return "T";
			case "D":
				return "U";
			default:
				return "-";
		}
	},

	getCircleNodes: function getCircleNodes(trend) {
		var _this = this;

		// Iterate through each result and map it ot a circular label
		var labelNodes = trend.map(function (result) {
			var resultColor = _this.getResultColor(result);
			var resultLetter = _this.getResultLetter(result);

			var emptyOrNot = _this.props.showLetter ? "" : "empty";

			return React.createElement(
				"div",
				{ className: "ui " + resultColor + " circular " + emptyOrNot + " label" },
				_this.props.showLetter ? resultLetter : ""
			);
		});

		// Check if it needs to be sliced down to the max number or circles
		if (this.props.amount && labelNodes.length > this.props.amount) {
			labelNodes = labelNodes.slice(0, this.props.amount);
		}

		return labelNodes;
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "teamTrend ui mini labels" },
			this.getCircleNodes(this.props.trend)
		);
	}
});