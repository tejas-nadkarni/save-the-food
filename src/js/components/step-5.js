import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';
import gaHelper from '../ga-helper';

var Step5 = React.createClass({

	render: function () {
		let btn1Click = () => {
			//ga helper
			gaHelper('button','Post Naming Click');

			var nickname = this.refs.foodNickname.value;
			this.props.setFoodNickname(nickname);
			this.props.nextStepClickHndlr();
		}		
		let imageClassNm = 'character-image happy-' + this.props.foodType;

		return(
				<div className="row ">
					
					<div className="columns small-12 large-12 content-wrap">	
							<InfoButton infoColor="white"/>					
							<div className={imageClassNm}></div>
					</div>
					<div className="columns small-12 small-centered medium-9 medium-centered">		
							<input id="field2" className="input-text-size" type="text" ref="foodNickname" placeholder={this.props.stepData.title}/>
					</div>
					<div className="columns medium-7 medium-centered">
							<p>{this.props.stepData.copy}</p>
					</div>
					<div className="columns small-12 large-12">
						<StepButton clickHndlr={btn1Click} buttonTitle={this.props.stepData.button.title}/>
					</div>
				</div>
		);
	}
});

export default Step5;