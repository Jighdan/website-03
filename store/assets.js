export const state = () => ({
	images: {
		intro: {
			src: "https://ik.imagekit.io/wt313diop6/avatar_5acnudJ_LO.jpeg",
			placeholder:
				"https://ik.imagekit.io/wt313diop6/avatar_5acnudJ_LO.jpeg?tr=w-1,h-1",
			alt: "Picture of Reinny Almonte",
		},
	},
});

export const getters = {
	getIntroImage(state) {
		return state.images.intro;
	},
};
