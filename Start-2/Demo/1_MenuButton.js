import { useState, useEffect } from "react";
import Icon from "./Icon"; 

export default function MenuButtonReact() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 50em)").matches);

	const toggleMenu = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 50em)");
		const handleChange = (e) => setIsLargeScreen(e.matches);

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return (
		<>
			{!isLargeScreen && (
				<button className="menu-button" aria-expanded={isOpen} onClick={toggleMenu}>
					<span className="sr-only">Menu</span>
					<Icon icon="list" />
				</button>
			)}

			{(isOpen || isLargeScreen) && (
				<div id="menu-content" className="menu-content">
					<ul className="nav-items">
						{textLinks.map(({ label, href }) => (
							<li key={href}>
								<a aria-current={isCurrentPage(href) ? "page" : undefined} className="link" href={href}>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}
