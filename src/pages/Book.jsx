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
						<select id="time" name="time" required>
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
							<select
								id="service"
								name="service"
								placeholder="Select a service type"
								required
							>
								<option value="service1">Service 1</option>
								<option value="service2">Service 2</option>
								<option value="service3">Service 3</option>
								<option value="service4">Service 4</option>
							</select>
							<label htmlFor="technician">Preferred technician:</label>
							<select id="technician" name="technician" required>
								<option value="first-available">First Available</option>
								<option value="tech1">Technician 1</option>
								<option value="tech2">Technician 2</option>
								<option value="tech3">Technician 3</option>
								<option value="tech4">Technician 4</option>
							</select>
						</div>

						<div className="description">
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
					</div>
					<button type="submit" className="submit-button">
						Submit
					</button>
				</form>
			</div>
			<div>
				<ContactFooter />
			</div>
		</>
	)
}

export default Book
