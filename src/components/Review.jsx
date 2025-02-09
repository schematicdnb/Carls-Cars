import React from "react"
import "./Review.css"

const Reviews = (props) => {
	return (
		<div>

			<div className="review">
					{props.review}
			</div>
			<div className="star-rating">
                {[...Array(props.rating)].map((_, i) => (
                    <span key={i}>☆</span>
                ))}
			</div>
			<div className="name">
				<p>-{props.name}</p>
			</div>
		</div>
	)
}

export default Reviews
