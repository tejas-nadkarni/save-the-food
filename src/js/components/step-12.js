import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step12 = React.createClass({
	render: function () {
		let stepData = this.props.stepData;
		let nickname = this.props.foodNickname;
		let foodtype = this.props.foodType;
		let childDataTitle = stepData.title[this.props.step.childId];
		let imageClassNm = 'character-image scared-' + this.props.foodType + ' small';

		let btn1Click = () => {
			this.props.nextStepClickHndlr();
		}
		
		return (
				<div className="row text-center">
					<div className="columns small-12 medium-12 large-12 content-wrap">
							<InfoButton infoColor="white"/>
							<h2>{childDataTitle}</h2>
							<div className={imageClassNm}></div>		
							<p>{stepData.copy_1} {nickname}, {stepData.copy_2}</p>
							<div className="btn-row">
								<StepButton clickHndlr={btn1Click} buttonTitle={stepData.button.title}/>	
							</div>
					</div>
				</div>
			);
	}
});

export default Step12;