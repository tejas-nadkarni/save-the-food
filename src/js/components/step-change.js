import React from 'react';

var stepChange = React.createClass({
	render: function () {

		let btn1Click = () => {	
			this.props.nextStepClickHndlr(undefined, this.refs.stepChangeSelect.value);
			//console.log();
		}		

		let divStyle = {
			width: '200px',
	    position: 'absolute',
	    top: '20px',
	    left: '20px'
		};
		let optionsList = [
			'step0',
			'step1',
			'step2',
		 	'step3',
		 	'step4',
		 	'step5',
		 	'step6',
		 	'step7',
		 	'step8',
		 	'step9',
		 	'step10',
		 	'step11',
		 	'step12',
		 	'step13',
		 	'step14',
		 	'step15',
		 	'step16',
		 	'step17'
		];

		let optionHtml = optionsList.map(function(data, i) {
    	return (
      	<option value={i} key={i}>{data}</option>
    	)
    });
		
		return (
			<select onChange={btn1Click} style={divStyle} ref="stepChangeSelect">
				<option value=""></option>
			  {optionHtml}
			</select>
		);
	}
});

export default stepChange;