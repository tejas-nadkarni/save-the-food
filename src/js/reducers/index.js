import { combineReducers } from 'redux';
import step from './step';
import foodType from './food-type';
import foodNickname from './food-nickname';

const rootReducer = combineReducers({step, foodType, foodNickname});

export default rootReducer;
