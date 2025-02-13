import React from "react"
import Header from "../components/Header"
import Contact from "../components/Contact"
import bgImg from "../assets/pexels-cottonbro-4489749.jpg"
import "./Services.css"

function Services() {
	return (
		<>
			<div className="header-container">
				<Header
					text="Carl’s Cars offers all the automotive services you need at competitive prices."
					bgImg={bgImg}
				/>
			</div>
			<div className="services">
				<table className="serviceTable">
					<thead>
						<tr>
							<th>Service</th>
							<th>Price</th>
							<th>Duration</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="service-type">Oil Change</td>
							<td className="service-cost">$29.99</td>
							<td className="service-duration">30 mins</td>
							<td className="description">
								Standard oil change with filter replacement. Keeps your engine
								running smoothly and extends its life. Recommended every 4,800
								to 8,000 kilometers.
							</td>
						</tr>
						<tr>
							<td className="service-type">Tire Rotation</td>
							<td className="service-cost">$19.99</td>
							<td className="service-duration">20 mins</td>
							<td className="description">
								Rotation of all four tires. Ensures even tire wear and extends
								tire life. Recommended every 9,600 to 12,800 kilometers.
							</td>
						</tr>
						<tr>
							<td className="service-type">Brake Inspection</td>
							<td className="service-cost">$39.99</td>
							<td className="service-duration">45 mins</td>
							<td className="description">
								Comprehensive brake system check. Ensures your brakes are
								functioning properly for safety. Recommended every 16,000
								kilometers or if you notice any issues.
							</td>
						</tr>
						<tr>
							<td className="service-type">Battery Check</td>
							<td className="service-cost">$14.99</td>
							<td className="service-duration">15 mins</td>
							<td className="description">
								Testing and inspection of battery. Prevents unexpected battery
								failure. Recommended every 6 months.
							</td>
						</tr>
						<tr>
							<td className="service-type">Alignment</td>
							<td className="service-cost">$69.99</td>
							<td className="service-duration">1 hour</td>
							<td className="description">
								Wheel alignment service. Ensures your vehicle drives straight
								and reduces tire wear. Recommended annually or if you notice
								uneven tire wear.
							</td>
						</tr>
						<tr>
							<td className="service-type">Car Wash</td>
							<td className="service-cost">$24.99</td>
							<td className="service-duration">30 mins</td>
							<td className="description">
								Exterior and interior cleaning. Keeps your car looking new and
								protects the paint. Recommended monthly.
							</td>
						</tr>
						<tr>
							<td className="service-type">AC Service</td>
							<td className="service-cost">$49.99</td>
							<td className="service-duration">1 hour</td>
							<td className="description">
								Inspection and recharge of air conditioning system. Ensures your
								AC is working efficiently. Recommended annually before summer.
							</td>
						</tr>
						<tr>
							<td className="service-type">Transmission Flush</td>
							<td className="service-cost">$129.99</td>
							<td className="service-duration">2 hours</td>
							<td className="description">
								Complete transmission fluid replacement. Keeps your transmission
								running smoothly and extends its life. Recommended every 48,000
								to 96,000 kilometers.
							</td>
						</tr>
						<tr>
							<td className="service-type">Engine Tune-Up</td>
							<td className="service-cost">$199.99</td>
							<td className="service-duration">3 hours</td>
							<td className="description">
								Comprehensive engine performance check and tune-up. Improves
								engine performance and fuel efficiency. Recommended every 48,000
								kilometers.
							</td>
						</tr>
						<tr>
							<td className="service-type">Detailing</td>
							<td className="service-cost">$149.99</td>
							<td className="service-duration">4 hours</td>
							<td className="description">
								Full interior and exterior detailing. Keeps your car looking
								like new and protects the interior and exterior surfaces.
								Recommended every 6 months.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="diagnostic-container">
				<div className="diagnostic">
					<p className="diagnostic">Not sure what you need? <br></br>
					Inspection and diagnostic services starting at $200</p>
					<p className="diagnostic-description">
						Our inspection and diagnostic service includes a thorough
						examination of your vehicle's key systems and components. Our
						experienced technicians will check the engine, transmission, brakes,
						suspension, steering, and electrical systems to identify any issues
						or potential problems. You'll receive a detailed report with
						recommendations for any necessary repairs or maintenance to keep
						your vehicle running smoothly and safely.
					</p>
				</div>
			</div>
			<div>
				<Contact />
			</div>
		</>
	)
}

export default Services
