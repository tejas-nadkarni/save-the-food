import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';
import steps from './data/steps';
import GblConstants from './gbl-constants'

// create an object for the default data
const defaultState = {
	step: {
		id: GblConstants.defaultStep,
		childId: 0
	},
	foodNickname: GblConstants.defaultFoodNm,
	foodType: 'apple'	
};

let store = createStore(rootReducer, defaultState);

export default store;
