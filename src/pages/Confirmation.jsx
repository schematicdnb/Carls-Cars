import React from "react"
import Header from "../components/Header"
import ContactFooter from "../components/ContactFooter"
import "./Confirmation.css"

function Confirmation() {
	return (
		<>
			<div className="header-container">
				<Header />
			</div>
			<div className="confirmation-container">
				{/* <h1>Confirmation</h1> */}
				<p>
					Thank you for booking with us, {localStorage.getItem("firstName")}!
				</p>
				<p>Your appointment is confirmed for:</p>
				<p>
					<b>{localStorage.getItem("bookingDate")}</b>
					{/* {localStorage.getItem("bookingTime")} */}
				</p>
                <p>
                    <b>{localStorage.getItem("bookingTime")}</b>
                </p>
				<p>We look forward to seeing you!</p>
			</div>
			<div className="alert">
				<p>
					If you need to cancel, please call at least 24 hours before your
					appointment.
				</p>
			</div>
			<div>
				<ContactFooter />
			</div>
		</>
	)
}

export default Confirmation
