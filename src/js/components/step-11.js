import React from 'react';
import StepButton from './step-button';
import ProgressBar from './progress-bar';
import InfoButton from './info-button';
import gaHelper from '../ga-helper';

var Step11 = React.createClass({
	render: function () {
		let btn1Click = () => {
			//ga helper
			gaHelper('button', '10/10 Click');
			this.props.nextStepClickHndlr(0);
		}
		let btn2Click = () => {
			//ga helper
			gaHelper('button', 'Not my type Click');
			this.props.nextStepClickHndlr(1);
		}

		let imageClassNm = 'character-image happy-' + this.props.foodType;
		return(
			<div className="row text-center">
				<div className="columns small-12 medium-12 large-12 content-wrap">
						<InfoButton infoColor="black"/>
						<h2>{this.props.stepData.title_1} {this.props.foodNickname} {this.props.stepData.title_2}</h2>
						<div className={imageClassNm}></div>		
						<div className="btn-row">
							<div className="row">
								<div className="columns small-6 medium-5 medium-offset-1 large-4 large-offset-2">
									<StepButton clickHndlr={btn1Click} buttonTitle={this.props.stepData.button.title_1}/>
								</div>
								<div className="columns small-6 medium-5 large-4 end">
									<StepButton clickHndlr={btn2Click} buttonTitle={this.props.stepData.button.title_2}/>
								</div>
							</div>
						</div>
						<ProgressBar activePoint="3"/>
				</div>
			</div>
		);
	}
});

export default Step11;