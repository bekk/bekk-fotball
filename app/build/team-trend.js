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

	render: function render() {
		var _this = this;

		var labelNodes = this.props.trend.map(function (result) {
			var resultColor = _this.getResultColor(result);
			var resultLetter = _this.getResultLetter(result);

			var content = _this.props.showLetter ? resultLetter : "";
			var emptyOrNot = _this.props.showLetter ? "" : "empty";

			var classString = "ui " + resultColor + " circular " + emptyOrNot + " label";
			return React.createElement(
				"div",
				{ className: classString },
				content
			);
		});

		if (this.props.amount && labelNodes.length > this.props.amount) {
			labelNodes = labelNodes.slice(0, this.props.amount);
		}

		return React.createElement(
			"div",
			{ className: "teamTrend ui mini labels" },
			labelNodes
		);
	}
});