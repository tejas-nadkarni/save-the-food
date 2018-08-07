import React from 'react';
import StepButton from './step-button';
import InfoButton from './info-button';

var Step1 = React.createClass({
	clickHandler: function(type, e) {  
		this.props.setFoodType(type);
  	this.props.nextStepClickHndlr(0);
	},
	render: function () {
		let childId = this.props.step.childId;
		let _this = this;
		let foodSeeds = this.props.stepData.food.map(function(data, i) {
    	return (
      	<div className="columns small-12 medium-4 large-4 text-center" onClick={()=>_this.clickHandler(data.type)} key={i}>
					<div className="seed-img character-image" data-seed-type={data.type}></div>
					<h3>{data.title}</h3>
					<h4 className="black">{data.sub_title}</h4>
					<p>{data.copy_1}</p>							
					<p>{data.copy_2}</p>							
				</div>
    	)
    });

    let stepData = this.props.stepData;

		return (
				<div>
					<div className="row">
						<div className="content-wrap columns small-12 large-12">
							<InfoButton infoColor="z`"/>
							<h1>{stepData.title}</h1>
							<h6>{stepData.copy}</h6>
						</div>
					</div>

					<div className="row seeds">
						{foodSeeds}
					</div>	
				</div>		
			)
	}
});

export default Step1;