import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

function UseScrollToTop() {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		const checkScrollTop = () => {
			if (!showScroll && window.pageYOffset > 400) {
				setShowScroll(true);
			} else if (showScroll && window.pageYOffset <= 400) {
				setShowScroll(false);
			}
		};

		window.addEventListener('scroll', checkScrollTop);
		return () => {
			window.removeEventListener('scroll', checkScrollTop);
		};
	}, [showScroll]);

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<FiChevronUp
			className="scrollToTop"
			onClick={backToTop}
			style={{
				height: 40,
				width: 40,
				padding: 7,
				borderRadius: 50,
				right: 50,
				bottom: 50,
				display: showScroll ? 'flex' : 'none',
				position: 'fixed',
				cursor: 'pointer',
				backgroundColor: '#3B82F6',
				color: 'white',
			}}
		/>
	);
}

export default UseScrollToTop;

