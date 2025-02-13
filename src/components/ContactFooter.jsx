import React from "react"
import "./ContactFooter.css"

const ContactFooter = () => {
	return (
		<div className="contact-section" id="contact-section">
			<div className="map-container">
				<iframe
					className="map"
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2800.317033759435!2d-75.68570782303065!3d45.42311013617839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1738699443658!5m2!1sen!2sca"
					style={{ border: 0 }}
					loading="lazy"
				></iframe>
			</div>
			{/* <div>
				<h1>Contact</h1>
			</div> */}
			<div className="contact-details">
				<p>
					<strong>Address</strong> <br /> 123 Automotive Street <br /> Ottawa,
					ON <br />
					K2A 1B3 <br />
					Canada
				</p>
				<p>
					<strong>Phone</strong> <br /> (613) 123-4567
				</p>
				<p>
					<strong>Email</strong> <br /> carl@carlscars.ca
				</p>
				<div>
					<p>
						<strong>Hours</strong> <br />
					</p>
					<div>
						<span className="hours">Mon-Fri:</span>
						<span>8AM - 4PM</span>
					</div>
					<div>
						<span className="hours">Sat:</span>
						<span>10AM - 2PM</span>
					</div>
					<div>
						<span className="hours">Sun:</span>
						<span>CLOSED</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactFooter
