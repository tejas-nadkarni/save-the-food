// TODO
// Default state should come from constants
import GblConstants from '../gbl-constants';

const nickname = (state = GblConstants.defaultFoodNm, action) => {
  switch(action.type) {
    case 'SET_FOODNICKNAME':
     	return action.value;
    default:
      return state;
  }
}

export default nickname;