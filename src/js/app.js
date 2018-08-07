import React from 'react';
import ReactDOM from 'react-dom';
import StepWrap from './components/step-wrap';
import InfoModal from './components/info-modal';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/action-creators';
import Store from './store';
import { Provider } from 'react-redux';

var App = React.createClass({
	render: function () {
		return(
			<Provider store={Store}>
				<StepWrap />				
			</Provider>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('main'));
ReactDOM.render(<InfoModal />, document.getElementById('modal-container'));

$(document).foundation();