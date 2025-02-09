import React from "react"
import Header from "../components/Header"
import Contact from "../components/Contact"
import bgImg from "../assets/pexels-cottonbro-4489749.jpg"

function Services() {
	return (
		<>
			<div className="header-container">
				<Header
					text="Carl’s Cars offers all the automotive services you need at competitive prices."
					bgImg={bgImg}
				/>
			</div>
			<div>
				<h1>PLACEHOLDER FOR SERVICES</h1>
			</div>
			<div>
				<Contact />
			</div>
		</>
	)
}

export default Services
