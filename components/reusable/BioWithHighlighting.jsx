import React from 'react';

const BioWithHighlighting = ({ bio, className }) => {
	const renderBio = () => {
		const parts = bio.split(/(\*\*.*?\*\*)/g);
		return parts.map((part, index) => {
			if (part.startsWith('**') && part.endsWith('**')) {
				return (
					<span key={index} className="font-semibold text-gray-900 dark:text-gray-100">
						{part.slice(2, -2)}
					</span>
				);
			}
			return part;
		});
	};

	return (
		<p className={`mb-4 text-ternary-dark dark:text-ternary-light text-lg ${className}`}>
			{renderBio()}
		</p>
	);
};

export default BioWithHighlighting;
