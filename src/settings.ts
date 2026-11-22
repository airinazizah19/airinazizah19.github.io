interface Profile {
	fullName: 'Airin Nur Azizah'
	title: 'Mahasiswa Statistika'
	institute: 'Universitas Cenderawasih'
	author_name: 'Airin Nur Azizah'
	research_areas: { title: 'Statistika dan Analisis Data'; description: 'Menerapkan metode statistika deskriptif dan inferensial untuk mengolah data, menguji hipotesis, serta menemukan pola yang akurat.'; field: 'mathematics' }[]
}

export const profile: Profile = {
	fullName: 'Airin Nur Azizah',
	title: 'Mahasiswa Statistika',
	institute: 'Universitas Cenderawasih',
	author_name: 'Airin Nur Azizah', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Statistika dan Analisis Data', description: 'Menerapkan metode statistika deskriptif dan inferensial untuk mengolah data, menguji hipotesis, serta menemukan pola yang akurat.', field: 'mathematics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'airinazizah8@gmail.com',
	linkedin: '',
	x: '',
	bluesky: '',
	github: 'https://github.com/airinazizah19',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://airinazizah19.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Airin Nur Azizah | Portfolio',
	default_description: 'Portfolio Airin Nur Azizah, Mahasiswa Statistika Universitas Cenderawasih. Berisi Profil, Pendidikan, Keterampilan, dan Karya.',
	default_image: '/images/astro-academia.png',
}
