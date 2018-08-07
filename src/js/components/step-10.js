import React from 'react';
import StepButton from './step-button';
import ProgressBar from './progress-bar';
import InfoButton from './info-button';

var Step10 = React.createClass({
	render: function () {
		let stepData = this.props.stepData;
		let childDataTitle = stepData.title[this.props.step.childId];
		let backgroundImage = stepData.image[this.props.step.childId];

		let btn1Click = () => {
			this.props.nextStepClickHndlr();
		}
		
		return (
				<div className="row">
					<span className={backgroundImage}></span>
					<div className="columns small-12 medium-12 large-12 content-wrap">
						<InfoButton infoColor="black"/>
						<h1>{childDataTitle}</h1>
						<p>{stepData.copy}</p>
						<div className="btn-row">
							<StepButton clickHndlr={btn1Click} buttonTitle={stepData.button.title}/>	
						</div>
						<ProgressBar activePoint="2"/>
					</div>
				</div>
			);
	}
});

export default Step10;