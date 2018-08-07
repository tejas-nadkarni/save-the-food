const gaHelper = function (eventCategory, eventAction) {
	if(typeof ga !== 'function' || typeof eventCategory !== 'string' || typeof eventAction !== 'string') return;

	ga('send', 	{
		hitType: 'event',
		eventCategory: eventCategory,
		eventAction: eventAction
	});
};

export default gaHelper;