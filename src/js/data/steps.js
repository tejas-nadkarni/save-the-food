const stepData = {
	0: {
		title: "Get Shelved.",
		copy: "Perfection is overrated. Enter the world of imperfect produce.",
		bg_color: "448AFF",
		button: {
			title_1: "PLAY",
			title_2: "Info"
		}
	},
	1: {
		title: "It starts with a seed.",
		copy: "Pick yours.",
		bg_color: "00AD59",
		food: [
				{
					type: "apple",
					title: "Apple",
					sub_title: "Crisp. Fresh. Juicy.",
					copy_1: "Life goal: Make it to a teacher's desk.",
					copy_2: "Skills: Keeping doctors away."
				},
				{
					type: "lemon",
					title: "Lemon",
					sub_title: "Sour. Tart. Acidic.",
					copy_1: "Life goal: Season any and every meal.",
					copy_2: "Skills: Turning life into lemonade."
				},
				{
					type: "carrot",
					title: "Carrot",
					sub_title: "Crunchy. Sweet. Earthy.",
					copy_1: "Life goal: Improve some vision, soften some skin.",
					copy_2: "Skills: Tasting great in a soup or a cake."
				}
		]
	},
	2: {
		title: "Plant your roots.",
		copy: "Click the wheel.",
		bg_color: "FFCCBC"
	},

	3: {
		title: {
			0: "Winter Frost",
			1: "Summer Drought",
			2: "Spring Storm",
			3: "Fall Flood"
		},
		bg_color: {
			0: "80D8FF",
			1: "F44336",
			2: "FFFF00",
			3: "000000"
		},
		title_color: {
			0: "FFFFFF",
			1: "FFFF00",
			2: "000000",
			3: "80D8FF"
		},
		copy_color: {
			0: "000000",
			1: "000000",
			2: "000000",
			3: "FFFFFF"
		},
		copy: "You got..."
	},

	4: {
		type: "basic",
		title: {
			0: "Little chilly in here?",	
			1: "Need some water?",
			2: "You're not in Kansas anymore.",
			3: "Forgot your umbrella?"
		},
		copy: "Rainy or dry, stormy or calm, climate plays the biggest role in determining how a seed develops. So when you see an apple with a few bumps, or a carrot with a pair of legs, think of them as badges of honor. Salute them. And then saut",
		copy_extra: " them.",
		button: {
				title: "MEET YOUR FOOD"
			}
	},

	5: {
		title: "Name your food.",
		copy: "\"Yeah yeah, I get it, I look a bit 'different.' But I've got the same dream as all my friends: to get shelved. I know it's an uphill battle. But hey, looks aren't everything.\" ",
		button: {
			title: "LET'S GET SHELVED!"
		},
		bg_color: "448AFF"
	},

	6: {
		type: "basic",
		title: "Not so fast.",
		copy_1: "They don't let just any piece of produce onto the shelf. First it has to pass government inspection. Answer the next few questions honestly and ",
		copy_2: " might just make it. Or not. No pressure.",
		button: {
			title: "TAKE THE TEST"
		}
	},

	7: {
		type: "basic",
		title_1: "Do you think ",
		title_2: " is nutritious?",
		button: {
			title_1: "LIKE KALE",
			title_2: "Kale no"
		}
	},

	8: {
		type: "basic",
		title: {
			0: "Kale yeah!",
			1: "What the kale!"
		},
		bg_color: {
			0: "00E676",
			1: "F44336"
		},
		image: {
			0: "pass icon-pass",
			1: "fail icon-fail"
		},
		copy: "Don't judge your food by its color. Or its bumps and bruises for that matter. Slice it, dice, it, cook it, eat it. Regardless of shape and size, this piece of produce is just as jam-packed with vitamins and minerals as any other.",
		button: {
			title : "NEXT"
		}
	},

	9: {
		type: "basic",
		title_1: "How do you think ",
		title_2: " tastes?",
		button: {
			title_1: "FARM FRESH",
			title_2: "LITTLE WEIRD"
		}
	},

	10: {	
		type: "basic",
		title: {
			0: "Good choice.",
			1: "Your loss."
		},
		bg_color: {
			0: "00E676",
			1: "F44336"
		},
		image: {
			0: "pass icon-pass",
			1: "fail icon-fail"
		},
		copy: "Close your eyes and take a bite. You won't taste any bumps or blemishes here. Just the familiar flavor of fresh produce. You may even like it more than your \"normal\" produce. But we won't tell.",
		button: {
			title: "NEXT"
		}
	},

	11: {
		type: "basic",
		title_1: "How do you think ",
		title_2: " looks?",
		button: {
			title_1: "10/10 WOULD BUY",
			title_2: "NOT MY TYPE"
		}
	},

	12: {	
		type: "basic",
		title:{
		 0: "The government disagrees.",
		 1: "The government agrees."
		},
		copy_1: "You say \"unique,\" they say \"u ugly.\" Unfortunately for",
		copy_2: "nutrition and taste don't mean a thing if the looks are lacking. Forget the shelf, their future is cow food or worse. Time for a quick getaway.",
		button: {
			title: "RUN!"
		},
		bg_color: "000"
	},

	13: {
		title_1: "Well that's lucky... ",
		title_2: "an open crate! ",
		copy_1: "Where does ",	
		cpoy_2: " fit?  Select a spot.",
		bg_color: "448AFF"
	},

	14: {
		type: "basic",
		title: "Little stuck?",
		copy: "These crates aren't made for misshappen food. Only one place to go from here.",
		button: {
			title: "NEXT"
		},
		bg_color: "00AD59"
	},

	15: {
		type: "basic",
		title: "The Landfill.",
		copy_1: "Congratulations. You've officially joined the ",
		copy_2: "26% of all produce",
		copy_3: " that is thrown away before it even makes it to the shelf. And all because you look a little different.",
		button: {
			title: "NEXT"
		},
		bg_color: "F44336"
	},

	16: {
		title_1: "We're just as tasty.",
		title_2: "We're just as nutritious.",
		title_3: "And we're cheaper.",
		bg_color: "000"
	},

	17: {
		title: "Stand up for ugly food.",
		bg_color: "80D8FF",
		copy_1: "share With friends",
		copy_2: "tweet #getshelved",
		copy_3: "buy ugly food"
	}
};

export default stepData;