import react from "react"
import "./Contact.css"
import Header from "../components/Header"
import ContactFooter from "../components/ContactFooter"

function Contact() {
	const [submitted, setSubmitted] = react.useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		setSubmitted(true)
	}

	return (
		<>
			<Header />
			<div
				style={{ backgroundColor: "white", color: "black", padding: "10px" }}
			>
				<h1>Questions? Get in touch!</h1>
			</div>

			<div className="form-container">
				<div className="form">
					{submitted ? (
						<div className="confirmation-message">
							<p>Thank you! Your message has been sent.</p>
						</div>
					) : (
						<form onSubmit={handleSubmit}>
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
									required
								/>
								<label htmlFor="email">Email:</label>
								<input type="email" id="email" name="email" required />
							</div>
							<label htmlFor="description">Question/Message:</label>
							<textarea
								id="description"
								name="description"
								rows="4"
								cols="50"
                                required
							/>
							<button type="submit" className="submit-button">
								Submit
							</button>
						</form>
					)}
				</div>
			</div>
			<ContactFooter />
		</>
	)
}

export default Contact
