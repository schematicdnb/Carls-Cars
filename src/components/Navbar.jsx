import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css" // Make sure to create a corresponding CSS file for styling
import logo from "../assets/carlscars.png"

function Navbar() {
	const scrollToContact = () => {
		const contactSection = document.getElementById("contact-section")
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">
					<img id="logo" src={logo} alt="Carl's Cars Logo" />
				</Link>
			</div>
			<ul className="navbar-links">
				<li>
					<Link to="/mechanics">Mechanics</Link>
				</li>
				<li>
					<Link to="/services">Services</Link>
				</li>
				<li>
					<a href="#contact-section" onClick={scrollToContact}>
						Contact
					</a>
				</li>
				<li className="book-online">
					<Link to="/book">Book Online</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
