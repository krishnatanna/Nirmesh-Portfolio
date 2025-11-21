import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';

const ExperienceTimeline = () => {
	return (
		<div className="container mx-auto px-4">
				<div className="text-center mb-8 pt-20">
					<h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light">
						Experience
					</h2>
				</div>
				<div className="relative">
					<div className="hidden md:block absolute w-0.5 h-full bg-gray-200 dark:bg-gray-700 left-1/2 transform -translate-x-1/2"></div>
					{experienceData.map((experience, index) => (
						<motion.div
							key={experience.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							className={`mb-8 flex justify-between items-start w-full ${
								index % 2 === 0 ? 'flex-row-reverse' : ''
							}`}
						>
							<div className="hidden md:block w-5/12"></div>
							<div className="hidden md:block relative">
								<div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mt-1"></div>
							</div>
							<div className="w-full md:w-5/12">
								<div className="bg-white dark:bg-zinc-900 p-4 rounded-md shadow-md">
									<p className="text-lg font-bold text-primary-dark dark:text-primary-light">
										{experience.date} | {experience.role} – {experience.company}
									</p>
									<p className="text-ternary-dark dark:text-ternary-light mt-2">
										{experience.description}
									</p>
									<div className="flex flex-wrap gap-2 mt-4">
										{experience.tags.map((tag) => (
											<span
												key={tag}
												className="bg-gray-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded-full"
											>
												{tag}
											</span>
										))}
									</div>
									{experience.nested && (
										<div className="mt-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
											{experience.nested.map((nestedItem) => (
												<div key={nestedItem.id} className="mb-4">
													<p className="text-md font-bold text-primary-dark dark:text-primary-light">
														{nestedItem.date} | {nestedItem.role}
													</p>
													<p className="text-ternary-dark dark:text-ternary-light mt-1">
														{nestedItem.description}
													</p>
													<div className="flex flex-wrap gap-2 mt-2">
														{nestedItem.tags.map((tag) => (
															<span
																key={tag}
																className="bg-gray-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded-full"
															>
																{tag}
															</span>
														))}
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
	);
};

export default ExperienceTimeline;