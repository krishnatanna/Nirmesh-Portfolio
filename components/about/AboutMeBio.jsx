import Image from 'next/image';
import { aboutMeData } from '../../data/aboutMeData';
import BioWithHighlighting from '../reusable/BioWithHighlighting';

function AboutMeBio() {
	const { heading, bio } = aboutMeData[0];
	const bioParagraphs = bio.split('\n\n');

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.jpg"
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<h2 className="text-3xl font-bold mb-4 text-primary-dark dark:text-primary-light">
					{heading}
				</h2>
				{bioParagraphs.map((paragraph, index) => (
					<BioWithHighlighting key={index} bio={paragraph} />
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
