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

	render: function() {
		var _this = this;

		var labelNodes = this.props.trend.map(function(result) {
			var resultColor = _this.getResultColor(result);
			var resultLetter = _this.getResultLetter(result);

			var content = (_this.props.showLetter) ? resultLetter : "";
			var emptyOrNot = (_this.props.showLetter) ? "" : "empty" ;

			var classString = "ui " + resultColor + " circular " + emptyOrNot + " label";
			return <div className={classString}>{content}</div>
		});

		if(this.props.amount && labelNodes.length > this.props.amount) {
			labelNodes = labelNodes.slice(0, this.props.amount);
		}

		return (
			<div className="teamTrend ui mini labels">
			{labelNodes}
			</div>
		);
	}
});
