// TODO: 
// We're using a combination of single and double quotes here. Let's stick to single.
// Cache GblConstants.actionNames so it can be reused across actions without being looked up on the object over and over.

import GblConstants from '../gbl-constants.js';

export function nextStep (childStep=undefined, jumpStep=undefined) {
	return {
		type: GblConstants.actionNames.next_step,
		jumpStep: jumpStep,
		childStep: childStep
	}
}

export function foodNickname (targetStep='myfood') {
	if(targetStep===''){
		targetStep = 'your food';
	}
	return {
		type: GblConstants.actionNames.set_foodnickname,
		value: targetStep
	}
}

export function foodType (targetStep) {
	return {
		type: GblConstants.actionNames.set_foodtype,
		value: targetStep
	}
}