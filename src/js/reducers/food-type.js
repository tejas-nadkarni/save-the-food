// TODO: 
// Default state should come from constants
// foodtype should be camel cased since it's two words

const foodtype = (state = '', action) => {
  switch(action.type) {
    case 'SET_FOODTYPE':
     	return action.value;
    default:
      return state;
  }
}

export default foodtype;