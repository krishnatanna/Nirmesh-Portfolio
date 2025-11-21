import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

function AboutCounter() {
	useCountUp({ ref: 'experienceCounter', end: 10, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 6, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 100, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 25, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years Turning Ideas into Products"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Founders Backed as a Tech Partner"
					counter={<span id="githubStarsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Client Satisfaction Rate"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
