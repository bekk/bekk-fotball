var PlayedMatchCard = React.createClass({

  humanizedDate: function(time) {
    return moment(time).calendar(null, {
      sameDay: '[i dag]',
      nextDay: '[i morgen]',
      nextWeek: '[neste ]dddd',
      lastDay: '[i går]',
      lastWeek: '[sist ] dddd',
      sameElse: 'Do MMM '
    });
  },

  render: function() {

    var homeTeamName = this.props.data.homeTeam.name;
    var homeTeamGoals = this.props.data.homeTeam.goals;
    var awayTeamName = this.props.data.awayTeam.name;
    var awayTeamGoals = this.props.data.awayTeam.goals;

    var homeColor = "grey";
    if(homeTeamName == "BEKK" && (homeTeamGoals > awayTeamGoals))
      homeColor = "green";
    else if(homeTeamName == "BEKK" && (homeTeamGoals < awayTeamGoals))
      homeColor = "red";

    var awayColor = "grey";
    if(awayTeamName == "BEKK" && (awayTeamGoals > homeTeamGoals))
      awayColor = "green";
    else if(awayTeamName == "BEKK" && (awayTeamGoals < homeTeamGoals))
      awayColor = "red";

    return (
      <div className="playedMatchCard ui fluid card">
        <div className="content">
          <div className="ui basic tiny centered header">
            {this.humanizedDate(this.props.data.startTime)}
          </div>
            <div className="ui center aligned">
              <div className="ui small labeled button">
                  <div className={"ui small " + homeColor + " button"}>
                    {homeTeamName}
                  </div>
                  <p className={"ui small basic " + homeColor + " left pointing label"}>
                    {homeTeamGoals}
                  </p>
              </div>
              <div className="ui small left labeled button">
                  <p className={"ui small basic " + awayColor + " right pointing label"}>
                    {awayTeamGoals}
                  </p>
                  <div className={"ui small " + awayColor + " button"}>
                    {awayTeamName}
                  </div>
              </div>
            </div>
        </div>
        <a className="ui bottom attached button" href="{this.props.data.links.match}">
            <i className="search icon"></i>
            Se detaljer om kampen
        </a>
      </div>
    );
  }
});
