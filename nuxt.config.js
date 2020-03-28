
export default {
	mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	plugins: ['~plugins/vue-scrollto.js'],
	loading: { color: '#fff' },

	buildModules: [
		// '@nuxtjs/eslint-module'
	],

	modules: [
		[
			'nuxt-fontawesome', {
				imports: [
					{
						set: '@fortawesome/free-solid-svg-icons',
						icons: ['fas']
					},
					{
						set: '@fortawesome/free-brands-svg-icons',
						icons: ['fab']
					}
				]
			},
			['vue-scrollto/nuxt', { duration: 300 }]
		]
	],

	build: {
		extend(config, ctx) {
		}
	},

	server: {
		host: "sethpainter.com"
	}
}
