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
			<div className="mechanics-container">
				<div className="mechanics">
					<Card
						photo={Carl}
						name="Carl"
						specialty="Bodywork"
						bio="Carl has over 20 years of experience in bodywork and has worked on a wide range of vehicles, from classic cars to modern models."
					/>
					<Card
						photo={Carlos}
						name="Carlos"
						specialty="Heating/AC"
						bio="Carlos is an expert in heating and air conditioning systems, ensuring your car's climate control is always in top shape."
					/>
					<Card
						photo={Carly}
						name="Carly"
						specialty="General Maintenance"
						bio="Carly handles general maintenance with precision and care, keeping your vehicle running smoothly and efficiently."
					/>
					<Card
						photo={Carla}
						name="Carla"
						specialty="Engines"
						bio="Carla specializes in engine repair and maintenance, with a deep understanding of both gasoline and diesel engines."
					/>
					<Card
						photo={Karl}
						name="Karl"
						specialty="Electrical Systems"
						bio="Karl is a wizard with electrical systems, diagnosing and fixing complex electrical issues in no time."
					/>
				</div>
			</div>
			<div>
				<Contact />
			</div>
		</>
	)
}

export default Mechanics
