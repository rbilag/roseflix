export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const IMAGE_SIZES = {
	backdrop: {
		small: 'w300',
		xmedium: 'w780',
		medium: 'w1280',
		large: 'original'
	},
	poster: {
		small: 'w154',
		medium: 'w185',
		large: 'w342'
	},
	still: {
		small: 'w92'
	}
};
export const BACKDROP_PLACEHOLDER = 'https://plchldr.co/i/300x169?bg=333333&text=ROSEFLIX';
export const POSTER_PLACEHOLDER = 'https://plchldr.co/i/342x513?bg=333333&text=ROSEFLIX';
export const STILL_PLACEHOLDER = 'https://plchldr.co/i/185x104?bg=333333&text=ROSEFLIX';

export const HEADER_LINKS = [
	{
		title: 'TV Shows',
		value: 'series'
	},
	{
		title: 'Movies',
		value: 'movies'
	}
];

export const FAQS = [
	{
		id: 1,
		header: 'What is Roseflix?',
		body:
			"Roseflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
	},
	{
		id: 2,
		header: 'How much does Roseflix cost?',
		body:
			'Watch Roseflix on your smartphone, tablet, Smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.'
	},
	{
		id: 3,
		header: 'Where can I watch?',
		body:
			"Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Roseflix account to watch instantly on the web at roseflix.com from your personal computer or on any internet-connected device that offers the Roseflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Roseflix with you anywhere."
	},
	{
		id: 4,
		header: 'How do I cancel?',
		body:
			'Roseflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
	},
	{
		id: 5,
		header: 'What can I watch on Roseflix?',
		body:
			'Roseflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Roseflix originals, and more. Watch as much as you want, any time you want.'
	}
];

export const FEATURES = [
	{
		id: 1,
		title: 'Enjoy on your TV.',
		description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
		video: '',
		image: '/images/misc/home-tv.jpg',
		alt: 'Roseflix on TV'
	},
	{
		id: 2,
		title: 'Download your shows to watch offline.',
		description: 'Save your favorites easily and always have something to watch.',
		video: '',
		image: '/images/misc/home-mobile.jpg',
		alt: 'Roseflix on mobile',
		direction: 'row-reverse'
	},
	{
		id: 3,
		title: 'Watch everywhere.',
		description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying more.',
		image: '/images/misc/home-imac.jpg',
		alt: 'Roseflix on different devices'
	}
];

export const FOOTER_LINKS = [
	{ id: 1, text: 'FAQ', url: 'https://help.netflix.com/support/412' },
	{ id: 2, text: 'Help Center', url: 'https://help.netflix.com/' },
	{ id: 3, text: 'Account', url: 'https://www.netflix.com/youraccount' },
	{ id: 4, text: 'Media Center', url: 'https://media.netflix.com/' },
	{ id: 5, text: 'Investor Relations', url: 'http://ir.netflix.com/' },
	{ id: 6, text: 'Jobs', url: 'https://jobs.netflix.com/jobs' },
	{ id: 7, text: 'Redeem Gift Cards', url: 'https://www.netflix.com/redeem' },
	{ id: 8, text: 'Buy Gift Cards', url: 'https://www.netflix.com/gift-cards' },
	{ id: 9, text: 'Ways to Watch', url: 'https://www.netflix.com/watch' },
	{ id: 10, text: 'Terms of Use', url: 'https://help.netflix.com/legal/termsofuse' },
	{ id: 11, text: 'Privacy', url: 'https://help.netflix.com/legal/privacy' },
	{ id: 12, text: 'Cookie Preferences', url: 'https://www.netflix.com/ph/#' },
	{ id: 13, text: 'Corporate Information', url: 'https://help.netflix.com/legal/corpinfo' },
	{ id: 14, text: 'Contact Us', url: 'https://help.netflix.com/contactus' },
	{ id: 15, text: 'Speed Test', url: 'https://fast.com/' },
	{ id: 16, text: 'Legal Notices', url: 'https://help.netflix.com/legal/notices' },
	{ id: 17, text: 'Roseflix Originals', url: 'https://www.netflix.com/ph/browse/genre/839338' }
];
