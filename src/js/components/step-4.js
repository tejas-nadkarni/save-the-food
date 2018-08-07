import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step4 = React.createClass({
	render: function () {
		let stepData = this.props.stepData;
		let childDataTitle = stepData.title[this.props.step.childId];

		let btn1Click = () => {
			this.props.nextStepClickHndlr();
		}
		
		return (
			<div className="row">
				<div className="content-wrap columns medium-12 large-12">
					<InfoButton infoColor="black"/>
					<h2>{childDataTitle}</h2>
					
					<p>{stepData.copy}&eacute; {stepData.copy_extra}</p>
					
					<div className="btn-row">
						<StepButton clickHndlr={btn1Click} buttonTitle={stepData.button.title}/>
					</div>
				</div>
			</div>
		);
	}
});

export default Step4;