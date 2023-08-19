import adapter from "@ptkdev/sveltekit-electron-adapter";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: false
		})
	}
};

export default config;
