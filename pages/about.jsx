import { motion } from 'framer-motion';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import WorkExperienceTabs from '../components/WorkExperienceTabs';
import TestimonialsTimeline from '../components/TestimonialsTimeline';
import PagesMetaHead from '../components/PagesMetaHead';

function about() {
	return (
		<div>
			<PagesMetaHead title="About Me" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			<div className="bg-primary-light dark:bg-secondary-dark">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="container mx-auto"
				>
					<WorkExperienceTabs />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="container mx-auto"
				>
					<div className="text-center mt-20 mb-8">
						<h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light">
							Client Testimonials
						</h2>
					</div>
					<TestimonialsTimeline />
				</motion.div>
			</div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			
		</div>
	);
}

export default about;
