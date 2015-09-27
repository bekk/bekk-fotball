var NextMatchesList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

 componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
	var matchNodes = this.state.data.map(function (match) {
		return (
			<div className="match column">
				<NextMatchCard data={match} />
			</div>
		);
	});

    return (
		<div className="nextMatchesList ui three column doubling stackable grid container">
			{matchNodes}
		</div>
    );
  }
});
