import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step13 = React.createClass({
	render: function () {
		let btn1Click = () => {
			this.props.nextStepClickHndlr();
		}

		let imageClassNm = 'character-image happy-' + this.props.foodType;
		let imageClassNm2 = 'character-image crate crate-' + this.props.foodType;

		return(
			<div className="row text-center">
				<div className="columns small-12 medium-12 large-12 content-wrap">
					<InfoButton infoColor="white"/>
					<h2>{this.props.stepData.title_1}</h2>
					<h2>{this.props.stepData.title_2}</h2>
					<h6>{this.props.stepData.copy_1} {this.props.foodNickname} {this.props.stepData.cpoy_2}</h6>
					<div className="row crate-selection">
						<div className="columns medium-6 large-6 show-for-medium">
							<div className={imageClassNm}></div>		
						</div>
						<div className="columns small-12 medium-6 large-6">
							<div className={imageClassNm2}>
								<a className="crate-slot top" onClick={btn1Click}></a>
								<a className="crate-slot bottom" onClick={btn1Click}></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Step13;