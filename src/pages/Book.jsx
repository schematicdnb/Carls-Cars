import React from "react"
import Header from "../components/Header"
import ContactFooter from "../components/ContactFooter"
import "./Book.css"
// import { Form, Button } from "react-bootstrap"

function Book() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const date = event.target.date.value
		const time = event.target.time.value
		const firstName = event.target.firstName.value
		localStorage.setItem("bookingDate", date)
		localStorage.setItem("bookingTime", time)
		localStorage.setItem("firstName", firstName)
		window.location.href = "/confirmation"
	}
	return (
		<>
			<div className="header-container">
				<Header />
			</div>
			<div className="book-container">
				<form className="form" onSubmit={handleSubmit}>
					<div className="time-date">
						<label htmlFor="date">Select a date:</label>
						<input type="date" id="date" name="date" required />
						<label htmlFor="time">Select a time:</label>
						<select id="time" name="time" required defaultValue="">
							<option value="" disabled>
								Select a time
							</option>
							<option value="8:00 AM">8:00 AM</option>
							<option value="9:00 AM">9:00 AM</option>
							<option value="10:00 AM">10:00 AM</option>
							<option value="11:00 AM">11:00 AM</option>
							<option value="12:00 PM">12:00 PM</option>
							<option value="1:00 PM">1:00 PM</option>
							<option value="2:00 PM">2:00 PM</option>
							<option value="3:00 PM">3:00 PM</option>
							<option value="4:00 PM">4:00 PM</option>
						</select>
					</div>
					<div className="info">
						<div className="name">
							<label htmlFor="firstName">First Name:</label>
							<input type="text" id="firstName" name="firstName" required />

							<label htmlFor="lastName">Last Name:</label>
							<input type="text" id="lastName" name="lastName" required />
						</div>

						<div className="contact">
							<label htmlFor="phone">Phone #:</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								placeholder="123-456-7890"
							/>
							<label htmlFor="email">Email:</label>
							<input type="email" id="email" name="email" />
						</div>

						<div className="service-tech">
							<label htmlFor="service">Service type:</label>
							<select id="service" name="service" required defaultValue="">
								<option value="" disabled>
									Select a service type
								</option>
								<option value="diagnostic">
									General Inspection/Diagnostic
								</option>
								<option value="oil-change">Oil Change</option>
								<option value="tire-rotation">Tire Rotation</option>
								<option value="brake-inspection">Brake Inspection</option>
								<option value="battery-check">Battery Check</option>
								<option value="alignment">Alignment</option>
								<option value="car-wash">Car Wash</option>
								<option value="ac-service">AC Service</option>
								<option value="transmission-flush">Transmission Flush</option>
								<option value="engine-tune-up">Engine Tune-Up</option>
								<option value="detailing">Detailing</option>
							</select>
							<label htmlFor="technician">Preferred technician:</label>
							<select
								id="technician"
								name="technician"
								defaultValue="first-available"
							>
								<option value="first-available">First Available</option>
								<option value="carl">Carl</option>
								<option value="carlos">Carlos</option>
								<option value="carly">Carly</option>
								<option value="carla">Carla</option>
								<option value="karl">Karl</option>
							</select>
						</div>

						<div className="additional-info">
							<label htmlFor="description">
								Additional info/problem description:
							</label>
							<textarea
								id="description"
								name="description"
								rows="4"
								cols="50"
							/>
						</div>
						<button type="submit" className="submit-button">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div>
				<ContactFooter />
			</div>
		</>
	)
}

export default Book
