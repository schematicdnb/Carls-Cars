import React from "react"
import "./Review.css"

const Review = (props) => {
	return (
		<div className="review-card">
			<div className="review-text">{props.review}</div>
			<div className="star-rating">
				{[...Array(props.rating)].map((_, i) => (
					<span key={i}>☆</span>
				))}
			</div>
			<div className="name">
				-{props.name}
			</div>
		</div>
	)
}

export default Review
