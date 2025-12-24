import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			{/* Header */}
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link href="/">
							<h1 className="text-2xl font-bold text-primary-dark dark:text-ternary-light">
								Nirmesh&apos;s Portfolio
							</h1>
						</Link>
					</div>
					<div className="flex items-center">
						{mounted && (
							<div
								onClick={() => setTheme(activeTheme)}
								aria-label="Theme Switcher"
								className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
							>
								{activeTheme === 'dark' ? (
									<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
								) : (
									<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
								)}
							</div>
						)}

						{/* Small screen hamburger menu */}
						<div className="sm:hidden">
							<button
								onClick={toggleMenu}
								type="button"
								className="focus:outline-none"
								aria-label="Hamburger Menu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
								>
									{showMenu ? (
										<FiX className="text-3xl" />
									) : (
										<FiMenu className="text-3xl" />
									)}
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<div className="text-center">
						<div className="block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
							<Link href="/" aria-label="Home" passHref>
								Home
							</Link>
						</div>
						<div className="block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
							<Link href="/projects" aria-label="Projects" passHref>
								Projects
							</Link>
						</div>
						<div className="block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
							<Link href="/about" aria-label="About Me" passHref>
								About Me
							</Link>
						</div>
						<div className="block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
							<Link href="/contact" aria-label="Contact" passHref>
								Contact
							</Link>
						</div>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<div
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Home"
					>
						<Link href="/" passHref>Home</Link>
					</div>
					<div
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						<Link href="/projects" passHref>Projects</Link>
					</div>
					<div
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						<Link href="/about" passHref>About Me</Link>
					</div>

					<div
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						<Link href="/contact" passHref>Contact</Link>
					</div>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-end items-center flex-col md:flex-row">
					{/* Theme switcher large screen */}
					{mounted && (
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
						>
							{activeTheme === 'dark' ? (
								<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
							) : (
								<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
							)}
						</div>
					)}
				</div>
			</div>
		</motion.nav>
	);
}

export default AppHeader;
