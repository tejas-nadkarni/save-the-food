import React from 'react';

const InfoButton = React.createClass({
	render: function () {
		let infoClassName = "info-trig icon-info " + this.props.infoColor;
		return (
			<span className={infoClassName} data-open="info-modal"></span>
		)
	}
});

export default InfoButton;