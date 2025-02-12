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
							<th>Description</th>
							<th>Price</th>
							<th>Duration</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Oil Change</td>
							<td>Standard oil change with filter replacement</td>
							<td>$29.99</td>
							<td>30 mins</td>
						</tr>
						<tr>
							<td>Tire Rotation</td>
							<td>Rotation of all four tires</td>
							<td>$19.99</td>
							<td>20 mins</td>
						</tr>
						<tr>
							<td>Brake Inspection</td>
							<td>Comprehensive brake system check</td>
							<td>$39.99</td>
							<td>45 mins</td>
						</tr>
						<tr>
							<td>Battery Check</td>
							<td>Testing and inspection of battery</td>
							<td>$14.99</td>
							<td>15 mins</td>
						</tr>
						<tr>
							<td>Alignment</td>
							<td>Wheel alignment service</td>
							<td>$69.99</td>
							<td>1 hour</td>
						</tr>
						<tr>
							<td>Car Wash</td>
							<td>Exterior and interior cleaning</td>
							<td>$24.99</td>
							<td>30 mins</td>
						</tr>
						<tr>
							<td>AC Service</td>
							<td>Inspection and recharge of air conditioning system</td>
							<td>$49.99</td>
							<td>1 hour</td>
						</tr>
						<tr>
							<td>Transmission Flush</td>
							<td>Complete transmission fluid replacement</td>
							<td>$129.99</td>
							<td>2 hours</td>
						</tr>
						<tr>
							<td>Engine Tune-Up</td>
							<td>Comprehensive engine performance check and tune-up</td>
							<td>$199.99</td>
							<td>3 hours</td>
						</tr>
						<tr>
							<td>Detailing</td>
							<td>Full interior and exterior detailing</td>
							<td>$149.99</td>
							<td>4 hours</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="diagnostic">
				<p>Not sure what you need?</p>
				<p>Inspection and diagnostic services starting at $150</p>
			</div>
			<div>
				<Contact />
			</div>
		</>
	)
}

export default Services
