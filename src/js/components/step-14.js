import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step14 = React.createClass({
	render: function () {
		let btn1Click = () => {
			this.props.nextStepClickHndlr();
		}
		let imageClassNm = 'character-image stuck-' + this.props.foodType;
		return(
			<div className="row text-center">
				<div className="columns small-12 medium-12 large-12 content-wrap">
					<InfoButton infoColor="white"/>
					<h2>{this.props.stepData.title}</h2>
					<div className={imageClassNm}></div>	
					<p>{this.props.stepData.copy}</p>
					<div className="btn-row">
						<StepButton clickHndlr={btn1Click} buttonTitle={this.props.stepData.button.title} />
					</div>
				</div>
			</div>
		);
	}
});

export default Step14;