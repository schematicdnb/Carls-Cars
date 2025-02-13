import React from "react"
import "./Card.css"

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.photo} alt="Card Image" className="circular-image" />
			<h2>{props.name}</h2>
			<p><b>{props.specialty}</b></p>
			<p>{props.bio}</p>
		</div>
	)
}

export default Card
