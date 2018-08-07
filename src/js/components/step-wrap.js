import React from 'react';
import stepData from '../data/steps';
import steps from './steps';
import Store from '../store';
import StepChange from './step-change';
import { nextStep, foodNickname, foodType } from '../actions/action-creators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		step: state.step,
		foodNickname: state.foodNickname,
		foodType: state.foodType
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		nextStep: (childStep, jumpStep) => {
			dispatch(nextStep(childStep, jumpStep));
		},
		setFoodNickname: (nickname, childStep) => {
			dispatch(foodNickname(nickname),nextStep(childStep));
		},
		setFoodType: (type) => {
			dispatch(foodType(type));
		}
	}
}

const Step = React.createClass({
	render: function () {
		let $body = $('body');
		let step = this.props.step.id.toString();	
		let CurrStepComponent = steps[step];
		let currStepData = stepData[step];
		let bgColor = this.checkBGColor(currStepData);
		let wrapStyles = {
			backgroundColor: '#' + bgColor
		};
		let wrapClasses = 'fade-main-area step-' + step;

		$body.attr('data-step', step);
		$body.css('backgroundColor', '#' + bgColor);

		// Add step type as class if it exists in data
		if (currStepData.hasOwnProperty('type')) wrapClasses += ' ' + currStepData.type;

		setTimeout(function(){ 
			$('#step-wrap').addClass('unfade-main-area');
		}, 500);

		return (			
			
			<div id="step-wrap" className={wrapClasses}>
				{/*<StepChange nextStepClickHndlr={this.props.nextStep}/>*/}
				<CurrStepComponent stepData={currStepData} step={this.props.step}
													foodNickname={this.props.foodNickname} foodType={this.props.foodType}
													nextStepClickHndlr={this.props.nextStep} 
													setFoodNickname={this.props.setFoodNickname}
													setFoodType={this.props.setFoodType}/>
			</div>		
			
		)
	},
	checkBGColor: function (currStepData) {
		if(currStepData.hasOwnProperty('bg_color')) {
			if(typeof currStepData.bg_color === 'object'){
				return currStepData.bg_color[this.props.step.childId];
			}else{
				return currStepData.bg_color
			}
		} else {
			return'EEEEEE';
		}
	}
});

const StepWrap = connect(mapStateToProps, mapDispatchToProps)(Step);

export default StepWrap;
