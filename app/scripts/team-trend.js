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
 		var classString = "ui " + resultColor + " circular label";

        return <div className={classString}>{resultLetter}</div>
  	})


    return (
		<div className="teamTrend ui mini labels">
	    	{labelNodes}
		</div>
    );
  }
});
