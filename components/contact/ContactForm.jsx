import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

function ContactForm() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					{/* Section 1: Tell Us About Yourself */}
					<div className="mb-8">
						<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
							Tell us about yourself
						</p>
						<FormInput
							inputLabel="Your Name"
							labelFor="name"
							inputType="text"
							inputId="name"
							inputName="name"
							placeholderText="Your Name"
							ariaLabelName="Name"
						/>
						<FormInput
							inputLabel="Your Email"
							labelFor="email"
							inputType="email"
							inputId="email"
							inputName="email"
							placeholderText="Your email"
							ariaLabelName="Email"
						/>
						<FormInput
							inputLabel="Your Phone Number"
							labelFor="phone"
							inputType="tel"
							inputId="phone"
							inputName="phone"
							placeholderText="Your Phone Number"
							ariaLabelName="Phone"
						/>
						<FormInput
							inputLabel="Company Name or Website"
							labelFor="company"
							inputType="text"
							inputId="company"
							inputName="company"
							placeholderText="Company Name or Website"
							ariaLabelName="Company"
						/>
					</div>

					{/* Section 2: Tell Us About Your Project */}
					<div className="mb-8">
						<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
							Tell us about your project
						</p>
						<div className="mt-6">
							<label
								className="block text-lg text-primary-dark dark:text-primary-light mb-2"
								htmlFor="project-description"
							>
								Describe your project briefly
							</label>
							<textarea
								className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
								id="project-description"
								name="project-description"
								cols="14"
								rows="6"
								aria-label="Describe your project briefly"
							></textarea>
						</div>
						<div className="mt-6">
							<label
								className="block text-lg text-primary-dark dark:text-primary-light mb-2"
								htmlFor="budget"
							>
								Please choose a budget
							</label>
							<select
								className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
								id="budget"
								name="budget"
								aria-label="Please choose a budget"
							>
								<option>0$ to 10K$</option>
								<option>10K$ to 25K$</option>
								<option>25K$ to 50K$</option>
								<option>50K$ or above</option>
								<option>Not Sure</option>
							</select>
						</div>
					</div>

					{/* Section 3: Schedule a Call */}
					<div>
						<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-4">
							Schedule a call with our tech experts!
						</p>
						<p className="text-gray-500 dark:text-gray-400 mb-8">
							Get a 45 mintues tech consultation for free!
						</p>
						<div className="border border-gray-300 dark:border-primary-dark rounded-xl p-6">
							<div className="mb-4">
								<label className="block text-lg text-primary-dark dark:text-primary-light mb-2">
									Select a Day
								</label>
								<div className="grid grid-cols-3 gap-2 text-center">
									{['Wed, Dec 24', 'Thu, Dec 25', 'Fri, Dec 26', 'Mon, Dec 29', 'Tue, Dec 30', 'Wed, Dec 31', 'Thu, Jan 1'].map(day => (
										<button key={day} type="button" className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
											{day}
										</button>
									))}
								</div>
							</div>

							<div className="mb-6">
								<label
									htmlFor="timezone"
									className="block text-lg text-primary-dark dark:text-primary-light mb-2"
								>
									Timezone
								</label>
								<select
									id="timezone"
									name="timezone"
									className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
									defaultValue="India Standard Time"
								>
									<option>India Standard Time</option>
									<option>US/Canada</option>
									<option>Central Time</option>
								</select>
							</div>

							<div className="mb-6">
								<label
									htmlFor="timezone"
									className="block text-lg text-primary-dark dark:text-primary-light mb-2"
								>
									Schedule Meeting
								</label>
								<select
									id="schedulemeeting"
									name="schedulemeeting"
									className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
									defaultValue="6 PM - 7 PM"
								>
									<option>6 PM - 7 PM</option>
									<option>7 PM - 8 PM</option>
									<option>8 PM - 9 PM</option>
								</select>
							</div>

						</div>
					</div>

					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
							<Button
								title="Submit"
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
