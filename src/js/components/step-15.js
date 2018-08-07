import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';
import gaHelper from '../ga-helper';

var Step15 = React.createClass({
	render: function () {
		let btn1Click = () => {
			//ga helper
			gaHelper('button', 'next on landfill');
			this.props.nextStepClickHndlr();
		}
		let imageClassNm = 'character scared-' + this.props.foodType + ' x-small';

		setTimeout(function(){ 
			$('#step-15-transition h1').addClass('unfaded-text');
		}, 1000);

		setTimeout(function(){ 
			$('#step-15-transition p').addClass('unfaded-text');
		}, 2000);

		setTimeout(function(){ 
			$('#step-15-transition .btn-row').addClass('unfaded-text');
		}, 3000);

		return(
			<div className="row" id="step-15-transition">
				<div className="columns small-12 medium-12 large-12">
					<h1 className="faded-text">{this.props.stepData.title}</h1>
					<p className="faded-text">{this.props.stepData.copy_1} <span className="black">{this.props.stepData.copy_2}</span>{this.props.stepData.copy_3}</p>
					<div className="btn-row faded-text">
						<StepButton clickHndlr={btn1Click} buttonTitle={this.props.stepData.button.title} />
					</div>
					<div className={imageClassNm}></div>
				</div>
			</div>
		);
	}
});

export default Step15;