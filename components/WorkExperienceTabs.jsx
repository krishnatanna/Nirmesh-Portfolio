import { useState } from 'react';
import { experienceData } from '../data/experienceData';
import { motion } from 'framer-motion';

const WorkExperienceTabs = () => {
	const [activeTab, setActiveTab] = useState(experienceData[0].id);

	const activeExperience = experienceData.find((exp) => exp.id === activeTab);

	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h2 className="text-3xl font-bold text-center text-primary-dark dark:text-primary-light">
				Work Experience
			</h2>
			<p className="text-center text-lg text-ternary-dark dark:text-ternary-light mt-2 mb-8">
				I’ve helped companies build, scale, and ship great software.
			</p>
			<div className="flex flex-col md:flex-row gap-8">
				<div className="w-full md:w-1/4 flex flex-row md:flex-col overflow-x-auto">
					{experienceData.map((exp) => (
						<button
							key={exp.id}
							onClick={() => setActiveTab(exp.id)}
							className={`text-left px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
								activeTab === exp.id
									? 'bg-zinc-100 dark:bg-zinc-800 text-primary-dark dark:text-white rounded-md'
									: 'text-ternary-dark dark:text-ternary-light hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md'
							}`}
						>
							{exp.company}
						</button>
					))}
				</div>
				<div className="w-full md:w-3/4">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg"
					>
						<h3 className="text-xl font-bold text-primary-dark dark:text-primary-light">
							{activeExperience.role}{' '}
							<a
								href="#"
								className="text-blue-500 hover:underline"
							>
								@{activeExperience.companyLink}
							</a>
						</h3>
						<p className="text-sm text-ternary-dark dark:text-ternary-light mt-1">
							{activeExperience.duration} &middot;{' '}
							{activeExperience.location}
						</p>
						<ul className="mt-4 space-y-2 list-disc list-inside text-ternary-dark dark:text-ternary-light">
							{activeExperience.highlights.map((highlight, index) => (
								<li key={index}>{highlight}</li>
							))}
						</ul>
						{activeExperience.subRoles && (
							<div className="mt-4">
								{activeExperience.subRoles.map((subRole, index) => (
									<div key={index} className="flex items-center mt-2">
										<div className="w-4 h-px bg-ternary-dark dark:bg-ternary-light mr-2"></div>
										<div>
											<p className="text-sm font-semibold text-primary-dark dark:text-primary-light">
												{subRole.role}
											</p>
											<p className="text-xs text-ternary-dark dark:text-ternary-light">
												{subRole.duration}
											</p>
										</div>
									</div>
								))}
							</div>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default WorkExperienceTabs;
