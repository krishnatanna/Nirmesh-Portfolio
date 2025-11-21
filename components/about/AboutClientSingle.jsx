import Image from 'next/image';

function AboutClientSingle({ title, image }) {
	return (
		<div className="py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
			<div className="relative w-24 h-12">
				<Image
					src={image}
					alt={title}
					fill
					className="object-contain"
				/>
			</div>		</div>
	);
}

export default AboutClientSingle;
