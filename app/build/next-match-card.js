'use strict';

var NextMatchCard = React.createClass({
  displayName: 'NextMatchCard',

  hasEnoughPlayers: function hasEnoughPlayers() {
    var signedUp = this.props.data.signedUp[0];
    var spots = this.props.data.signedUp[1];
    return signedUp >= spots;
  },

  humanizedDate: function humanizedDate(time) {
    return moment(time).calendar(null, {
      sameDay: '[i dag kl. ]LT',
      nextDay: '[i morgen kl. ]LT',
      nextWeek: '[neste ]dddd [kl. ]LT',
      lastDay: '[i går]',
      lastWeek: '[sist ] dddd',
      sameElse: 'Do MMM [ kl. ] LT'
    });
  },

  render: function render() {

    // Button should indicate call-to-action if there are not enough players
    var signupButton = this.hasEnoughPlayers() ? React.createElement(
      'button',
      { className: 'ui blue button' },
      'Med!'
    ) : React.createElement(
      'button',
      { className: 'ui positive button' },
      'Med!'
    );

    return React.createElement(
      'div',
      { className: 'nextMatchCard ui fluid card' },
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          'div',
          { className: 'ui center aligned' },
          React.createElement(
            'p',
            { className: 'ui huge header' },
            this.props.data.oponent.name
          ),
          React.createElement(TeamTrend, { trend: this.props.data.oponent.trend, amount: 3, showLetter: false }),
          React.createElement(
            'p',
            { className: 'medium' },
            this.humanizedDate(this.props.data.startTime)
          ),
          React.createElement(
            'a',
            { className: 'ui basic label' },
            React.createElement('i', { className: 'marker icon' }),
            this.props.data.arena.name
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'extra content' },
        React.createElement(
          'div',
          { className: 'ui grid' },
          React.createElement(
            'div',
            { className: 'ten wide column' },
            React.createElement(
              'div',
              { className: 'ui tiny fluid buttons' },
              signupButton,
              React.createElement(
                'button',
                { className: 'ui basic blue button' },
                'Tentativ'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'six wide middle aligned column' },
            this.props.data.signedUp[0],
            ' / ',
            this.props.data.signedUp[1],
            ' påmeldt'
          )
        )
      )
    );
  }
});