//TODO
//Default state should come from constants

const step = (state = 0, action) => {
  switch(action.type) {

    case 'NEXT_STEP':
			let stepId = state.id;
			if (typeof stepId !== 'number') return console.log('state is not a number');
			if(action.jumpStep==undefined){
				return { id: stepId + 1, childId: action.childStep};
			}else{
				return { id: parseInt(action.jumpStep), childId: action.childStep};
			}
    default:
      return state;
  }
}

export default step;
