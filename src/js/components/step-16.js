import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step16 = React.createClass({
	render: function () {
		let imageClassNm = 'scared-' + this.props.foodType + ' small';

		let btn1Click = () => {
			this.props.nextStepClickHndlr();
		}

		setTimeout(function(){ 
			btn1Click() 
		}, 6000);
		
		setTimeout(function(){ 
			$('#step-16-transition h2:nth-child(1)').addClass('unfaded-text');
		}, 1000);

		setTimeout(function(){ 
			$('#step-16-transition h2:nth-child(2)').addClass('unfaded-text');
		}, 2000);

		setTimeout(function(){ 
			$('#step-16-transition h2:nth-child(3)').addClass('unfaded-text');
		}, 3000);

		return(
			<div className="row text-center">
				<div className="columns small-12 medium-12 large-12 content-wrap" id="step-16-transition">
					<h2 className="faded-text">{this.props.stepData.title_1}</h2>
					<h2 className="faded-text">{this.props.stepData.title_2}</h2>
					<h2 className="faded-text">{this.props.stepData.title_3}</h2>
					<div className={imageClassNm}></div>
				</div>
			</div>
		);
	}
});

export default Step16;