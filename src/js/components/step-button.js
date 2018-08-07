import React from 'react';

const StepButton = React.createClass({

	render: function () {
			let title = this.props.buttonTitle;
		return (
			<button className="step-btn" type="button" onClick={this.props.clickHndlr}>{this.props.buttonTitle.toString()}</button>
		)
	}
});

export default StepButton;