import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import PagesMetaHead from '../components/PagesMetaHead';

function contact() {
	return (
		<div>
			<PagesMetaHead title="Contact" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto"
			>
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-6 py-4 border-b-2 border-gray-200 dark:border-gray-800">Contact</h1>
				</div>
				<div className="flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5">
					<ContactForm />
					<ContactDetails />
				</div>
			</motion.div>
		</div>
	);
}

export default contact;
