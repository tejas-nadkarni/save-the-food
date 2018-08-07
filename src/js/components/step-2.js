import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

const Step2 = React.createClass({
	wheelSpinInitiated: false,
 	getInitialState: function(){
      return {
          className: 'wheel'
      };
  },
  handleClick: function(){
      
  },
	render: function () {
		return (
			<div className="row">
			  <div className="content-wrap columns small-12 large-12">
					<InfoButton infoColor="black"/>
					<h1>{this.props.stepData.title}</h1>
					<h6>{this.props.stepData.copy}</h6>

					<div id="weather-picker">
						<div className="wheel-arrow">
							<span className="icon-pointer-down"></span>
						</div>
						<div id="weather-wheel" className={this.state.className} onClick={this.weatherWheelClickHndlr}></div>
					</div>
				</div>
			</div>
		)
	},
	nextStep: function(type, e) {  
  	this.props.nextStepClickHndlr(type);
	},
	weatherWheelClickHndlr: function (e) {
		if (this.wheelSpinInitiated) return;

		let wheel = e.target;		
		let randomNumber = Math.floor(Math.random()*(3-0+1)+0);
		let _this = this;

		this.wheelSpinInitiated = true;

		wheel.addEventListener("animationend", function (e) {
			//timer to wait for a sec before moving
			setTimeout(function(){ 
				_this.nextStep(randomNumber);
			}, 1000);			
		}, false);
		
		if (randomNumber === 0){
      this.setState({className: 'wheel winter-spin'});
    } else if (randomNumber === 1){
      this.setState({className: 'wheel summer-spin'});
   	} else if (randomNumber === 2){
   	  this.setState({className: 'wheel spring-spin'});
   	} else if (randomNumber === 3){
    	this.setState({className: 'wheel fall-spin'});
   	}		
	}	
});

export default Step2;