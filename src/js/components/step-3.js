import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step3 = React.createClass({
	render: function () {
		let stepData = this.props.stepData;
		let childDataTitle = stepData.title[this.props.step.childId];

		let btn1Click = () => {
			this.props.nextStepClickHndlr(this.props.step.childId);
		}
		
		setTimeout(function(){ 
			btn1Click(); 
		}, 3000);

		let titleStyle = {
			color: '#' + stepData.title_color[this.props.step.childId]
		}

		let copyStyle = {
			color: '#' + stepData.copy_color[this.props.step.childId]
		}

		return (
			<div className="row">
				<div className="columns small-8 medium-5 large-5 small-centered medium-centered large-centered">
					<h6 style={copyStyle}>{stepData.copy}</h6>
					<h1 style={titleStyle}>{childDataTitle}</h1>
				</div>
			</div>
		);
	}
});

export default Step3;