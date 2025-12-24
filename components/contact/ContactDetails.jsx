import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		label: 'Address',
		name: 'B 610, Prahladnagar Trade center, behind titanium city center, Ahmedabad, India 380015',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		label: 'Email',
		name: 'nirmesh.quickdiv@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		label: 'Phone',
		name: '+91 70164 98078',
		icon: <FiPhone />,
	},
];

function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact Details
				</h2>
				<div className="font-general-regular">
					{contacts.map((contact) => (
						<div
							className="bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-sm p-5 mb-5 border border-gray-200 dark:border-ternary-dark"
							key={contact.id}
						>
							<div className="flex items-center">
								<div className="text-gray-500 dark:text-gray-400 text-2xl mr-4">
									{contact.icon}
								</div>
								<div>
									<p className="text-gray-500 dark:text-gray-400">
										{contact.label}
									</p>
									<p className="text-primary-dark dark:text-primary-light">
										{contact.name}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ContactDetails;
