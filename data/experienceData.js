export const experienceData = [
	{
		id: 1,
		company: 'Emway',
		role: 'Principal Engineer',
		companyLink: 'Emway',
		duration: 'Mar 2024 – Present',
		location: 'Michigan, USA (Remote)',
		highlights: [
			'Developed and maintained multiple web tools used by thousands of ABOs across the globe.',
			'Built REST APIs and microservices in Golang, Node.js, and Python with AWS Lambda.',
			'Participated in sprint planning, architectural discussions, and cross-team collaboration.',
		],
	},
	{
		id: 2,
		company: 'Simform',
		role: 'Lead Engineer',
		companyLink: 'Simform',
		duration: 'Jun 2020 – Apr 2022',
		location: 'Ahmedabad, India',
		highlights: [
			'Lead end-to-end development of high-traffic modules across Web, Admin, and Mobile interfaces.',
			'Modernized legacy codebases by migrating to scalable microservices using Node.js and TypeScript.',
			'Implemented complex real-time bidding systems using WebSockets, Redis, and RabbitMQ.',
		],
		subRoles: [
			{
				role: 'Senior Software Engineer',
				duration: 'Jun 2018 – Jun 2020',
			},
			{
				role: 'Software Engineer',
				duration: 'Jun 2016 – Jun 2018',
			},
		],
	},
	{
		id: 3,
		company: 'Infowearhouse',
		role: 'Software Engineer',
		companyLink: 'Infowearhouse',
		duration: 'May 2015 – May 2016',
		location: 'Ahmedabad, India',
		highlights: [
			'Contributed to legacy ERP systems and internal platforms',
			'Developed profile and preference management APIs.',
			'Developed moderation features in admin dashboard.',
		],
	},
];
