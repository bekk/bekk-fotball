"use strict";

var NextMatchCard = React.createClass({
	displayName: "NextMatchCard",

	hasEnoughPlayers: function hasEnoughPlayers() {
		var signedUp = this.props.data.signedUp[0];
		var spots = this.props.data.signedUp[1];
		return signedUp >= spots;
	},

	render: function render() {

		// Button should indicate call-to-action if there are not enough players
		var signupButton = this.hasEnoughPlayers() ? React.createElement(
			"button",
			{ className: "ui button" },
			"Med!"
		) : React.createElement(
			"button",
			{ className: "ui positive button" },
			"Med!"
		);

		return React.createElement(
			"div",
			{ className: "nextMatchCard ui fluid card" },
			React.createElement(
				"div",
				{ className: "content" },
				React.createElement(
					"div",
					{ className: "header" },
					"Neste kamp",
					React.createElement(
						"a",
						{ className: "ui right floated basic label", target: "_blank", href: this.props.data.arena.mapUrl },
						React.createElement("i", { className: "marker icon" }),
						" ",
						this.props.data.arena.name
					)
				)
			),
			React.createElement(
				"div",
				{ className: "content" },
				React.createElement(
					"div",
					{ className: "ui large centered header" },
					React.createElement(
						"div",
						{ className: "content" },
						this.props.data.oponent.name,
						React.createElement(
							"div",
							{ className: "sub header" },
							moment(this.props.data.startTime).calendar(null, { sameElse: 'll [kl.] LT' })
						)
					)
				),
				React.createElement(
					"div",
					{ className: "ui center aligned" },
					React.createElement(TeamTrend, { trend: this.props.data.oponent.trend })
				)
			),
			React.createElement(
				"div",
				{ className: "extra content" },
				React.createElement(
					"div",
					{ className: "ui grid" },
					React.createElement(
						"div",
						{ className: "ten wide column" },
						React.createElement(
							"div",
							{ className: "ui tiny fluid buttons" },
							signupButton,
							React.createElement(
								"button",
								{ className: "ui button" },
								"Tentativ"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "six wide middle aligned column" },
						this.props.data.signedUp[0],
						" / ",
						this.props.data.signedUp[1],
						" påmeldt"
					)
				)
			)
		);
	}
});
/*<i className="right floated green arrow circle up icon"></i>*/