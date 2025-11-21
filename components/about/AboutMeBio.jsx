import Image from 'next/image';
import { aboutMeData } from '../../data/aboutMeData';
import BioWithHighlighting from '../reusable/BioWithHighlighting';

function AboutMeBio() {
	const { bio } = aboutMeData[0];
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
				{bioParagraphs.map((paragraph, index) => (
					<BioWithHighlighting key={index} bio={paragraph} />
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
