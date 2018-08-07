import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';
import gaHelper from '../ga-helper';

const Step0 = React.createClass({
	render: function () {
		let btn1Click = () => {			
			//ga helper
			gaHelper('button', 'play');
			this.props.nextStepClickHndlr(0);
		} 

		setTimeout(function(){ 
			$('#step-0-transition h1').addClass('unfaded-text');
		}, 500);

		setTimeout(function(){ 
			$('#step-0-transition h6').addClass('unfaded-text');
		}, 1500);

		setTimeout(function(){ 
			$('#step-0-transition .btn-row').addClass('unfaded-text');
		}, 2500);

		return (
			<div className="row" id="step-0-transition">
				<div className="content-wrap columns small-12 large-12">
					<InfoButton infoColor="white"/>
					<h1 className="faded-text">{this.props.stepData.title}</h1>
					<h6 className="faded-text">{this.props.stepData.copy}</h6>
					<div className="btn-row faded-text">
						<StepButton clickHndlr={btn1Click} buttonTitle={this.props.stepData.button.title_1} />
					</div>
				</div>
			</div>
		)
	}
});

export default Step0;