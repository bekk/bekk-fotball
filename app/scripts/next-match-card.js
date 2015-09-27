var NextMatchCard = React.createClass({

  hasEnoughPlayers: function() {
    var signedUp = this.props.data.signedUp[0];
    var spots = this.props.data.signedUp[1];
    return signedUp >= spots;
  },

  render: function() {

    // Button should indicate call-to-action if there are not enough players
    var signupButton = this.hasEnoughPlayers()
      ? <button className="ui button">Med!</button>
      : <button className="ui positive button">Med!</button>

    return (
      <div className="nextMatchCard ui fluid card">
        <div className="content">
            <div className="ui center aligned">
              <TeamTrend trend={this.props.data.oponent.trend} amount={4} showLetter={false} />

              <p className="ui huge header">
                {this.props.data.oponent.name}
              </p>

              <a className="ui basic label">
                <i className="clock icon"></i>
                {moment(this.props.data.startTime).calendar(null, { sameElse: 'll [kl.] LT' })}
              </a>

              <a className="ui basic label">
                <i className="marker icon"></i>
                {this.props.data.arena.name}
              </a>

            </div>
            {/*<i className="right floated green arrow circle up icon"></i>*/}

        </div>

        <div className="extra content">
          <div className="ui grid">
            <div className="ten wide column">
              <div className="ui tiny fluid buttons">
                {signupButton}
                <button className="ui button">Tentativ</button>
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
