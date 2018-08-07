import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step6 = React.createClass({
	render: function () {
		let btn1Click = () => {
			this.props.nextStepClickHndlr();
		}

		return(
			<div className="row">
				<span className="fail icon-fail"></span>
				<span className="pass icon-pass"></span>
				
				<div className="columns small-12 medium-12 large-12 content-wrap" id="step-6-transition">
					<InfoButton infoColor="black"/>

					<h1>{this.props.stepData.title}</h1>
					 
					<p>{this.props.stepData.copy_1} {this.props.foodNickname} {this.props.stepData.copy_2}</p>

					<div className="btn-row">
						<StepButton clickHndlr={btn1Click} buttonTitle={this.props.stepData.button.title}/>	
					</div>					
				</div>				
			</div>
		);
	}
});

export default Step6;