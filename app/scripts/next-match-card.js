var NextMatchCard = React.createClass({

  hasEnoughPlayers: function() {
    var signedUp = this.props.data.signedUp[0];
    var spots = this.props.data.signedUp[1];
    return signedUp >= spots;
  },

  humanizedDate: function(time) {
    return moment(time).calendar(null, {
      sameDay: '[i dag kl. ]LT',
      nextDay: '[i morgen kl. ]LT',
      nextWeek: '[neste ]dddd [kl. ]LT',
      lastDay: '[i går]',
      lastWeek: '[sist ] dddd',
      sameElse: 'Do MMM [ kl. ] LT'
    });
  },

  render: function() {

    // Button should indicate call-to-action if there are not enough players
    var signupButton = this.hasEnoughPlayers()
      ? <button className="ui blue button">Med!</button>
      : <button className="ui positive button">Med!</button>

    return (
      <div className="nextMatchCard ui fluid card">
        <div className="content">
            <div className="ui center aligned">
              <p className="ui huge header">
                {this.props.data.oponent.name}
              </p>

              <TeamTrend trend={this.props.data.oponent.trend} amount={3} showLetter={false} />

              <p className="medium">
                {this.humanizedDate(this.props.data.startTime)}
              </p>
              <a className="ui basic label">
                <i className="marker icon"></i>
                {this.props.data.arena.name}
              </a>
            </div>
        </div>

        <div className="extra content">
          <div className="ui grid">
            <div className="ten wide column">
              <div className="ui tiny fluid buttons">
                {signupButton}
                <button className="ui basic blue button">Tentativ</button>
              </div>
            </div>

            <div className="six wide middle aligned column">
              {this.props.data.signedUp[0]} / {this.props.data.signedUp[1]} påmeldt
            </div>
          </div>
        </div>
      </div>
    );
  }
});
