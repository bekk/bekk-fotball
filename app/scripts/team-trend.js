var TeamTrend = React.createClass({

	getResultColor: function(result) {
		switch (result) {
			case "W": return "green";
			case "L": return "red";
			case "D": return "yellow";
			default:  return "";
		}
	},

	getResultLetter: function(result) {
		switch (result) {
			case "W": return "S";
			case "L": return "T";
			case "D": return "U";
			default:  return "-";
		}
	},

	getCircleNodes: function(trend) {
		var _this = this;

		// Iterate through each result and map it ot a circular label
		var labelNodes = trend.map(function(result) {
			var resultColor = _this.getResultColor(result);
			var resultLetter = _this.getResultLetter(result);

			var emptyOrNot = (_this.props.showLetter) ? "" : "empty" ;

			return <div className={"ui " + resultColor + " circular " + emptyOrNot + " label"}>{(_this.props.showLetter) ? resultLetter : ""}</div>
		});

		// Check if it needs to be sliced down to the max number or circles
		if(this.props.amount && labelNodes.length > this.props.amount) {
			labelNodes = labelNodes.slice(0, this.props.amount);
		}

		return labelNodes;
	},

	render: function() {
		return (
			<div className="teamTrend ui mini labels">
				{this.getCircleNodes( this.props.trend )}
			</div>
		);
	}
});
