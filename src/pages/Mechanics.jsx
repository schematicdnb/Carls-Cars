import React from "react"
import "./Mechanics.css"
import Header from "../components/Header"
import Contact from "../components/Contact"
import bgImg from "../assets/pexels-pixabay-162553.jpg"
import Card from "../components/Card"
import Carl from "../assets/Carl.jpg"
import Carla from "../assets/Carla.jpg"
import Carlos from "../assets/Carlos.jpg"
import Carly from "../assets/Carly.jpg"
import Karl from "../assets/Karl.jpg"

function Mechanics() {
	return (
		<>
			<div className="header-container">
				<Header text="We’ve got the right Carl for your car!" bgImg={bgImg} />
			</div>
			<div className="mechanics">
				<Card photo={Carl} name="Carl" description="Bodywork" />
				<Card photo={Carlos} name="Carlos" description="Heating/AC" />
				<Card photo={Carly} name="Carly" description="General Maintenance" />
				<Card photo={Carla} name="Carla" description="Engines" />
				<Card photo={Karl} name="Karl" description="Electrical Systems" />
			</div>
			<div>
				<Contact />
			</div>
		</>
	)
}

export default Mechanics
