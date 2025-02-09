import React from "react"
import Header from "../components/Header"
import Contact from "../components/Contact"
import bgImg from "../assets/pexels-pixabay-162553.jpg"

function Mechanics() {
	return (
		<>
			<div className="header-container">
				<Header text="We’ve got the right Carl for your car!" bgImg={bgImg} />
			</div>
			<div>
				<h1>PLACEHOLDER FOR MECHANICS</h1>
			</div>
			<div>
				<Contact />
			</div>
		</>
	)
}

export default Mechanics
