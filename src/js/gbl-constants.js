// TODO: 
// It's good convention to use all caps for global variable/properties like constants so let's change the prop names below to Uppercase. 
// There's also a mix of camel casing and underscores here. Once we make the property names all caps we'll have to switch to underscores.

const GblConstants = {
	url: 'http://www.gogetshelved.com',
	title: 'Get Shelved',
	description: 'Perfection is overrated. Enter the world of imperfect produce.',
	fbStatus: 'My ugly food joined the 26% of all produce that will be thrown away before it even reaches the shelf. Click & find out why it won\'t #GetShelved.',
	defaultStep: 0,
	defaultFoodNm: 'your food',
	actionNames: {
		next_step: 'NEXT_STEP',
		set_foodnickname: 'SET_FOODNICKNAME',
		set_foodtype: 'SET_FOODTYPE'
	}
};

export default GblConstants;