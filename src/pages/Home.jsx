import { useState } from "react"
import "./Home.css"
import Header from "../components/Header"
import Review from "../components/Review"
import ContactFooter from "../components/ContactFooter"
import bgImg from "../assets/pexels-daniel-andraski-197681005-13065693.jpg"
import soundImage from "../assets/pexels-olly-3779448.jpg"

function Home() {
	return (
		<>
			<div className="header-container">
				<Header
					text="Auto mechanics serving Ottawa motorists since 1989"
					bgImg={bgImg}
				/>
			</div>
			<div className="about-container">
				<div className="about">
					<p>
						Welcome to Carl's Cars, your trusted auto repair shop in Ottawa.
						Since 1989, we have been dedicated to providing top-notch automotive
						services to our community. Our experienced mechanics are committed
						to getting you back on the road quickly and safely. Whether you need
						routine maintenance or major repairs, you can count on us for
						reliable and efficient service. <br />
						<br />
						Our state-of-the-art facility is equipped with the latest diagnostic
						tools and equipment to ensure your vehicle receives the best care
						possible. We pride ourselves on our transparency and integrity,
						providing you with detailed explanations and fair pricing for all
						services. <br />
						<br />
						At Carl's Cars, customer satisfaction is our top priority. We strive
						to build long-lasting relationships with our clients through
						exceptional service and a commitment to excellence. Thank you for
						choosing us as your trusted auto repair shop.
					</p>
				</div>
			</div>

			<div className="reviews">
				<p>
					At Carl’s Cars we know you have places to be, our aim is to get you
					back on the road as soon as possible.
				</p>
				<div className="review-container">
					<Review
						review="My car was literally cut in half after I crashed into a sawmill at 9am. Carl had my car all fixed up by noon!"
						name="Bobby"
						rating={5}
					/>
					<Review
						review="When it comes to cars, I don’t know a thingamabobber from a whatsawhosit, but Carl sure does!"
						name="Mildred"
						rating={5}
					/>
					<Review
						review="Fastest oil change in the West! I come to Carl’s Cars for all my maintenance and repairs :)"
						name="Steph"
						rating={5}
					/>
					<Review
						review="Vroom vroom! I love to drive fast, which means my car is always breaking down, but Carl has me covered!"
						name="Fred"
						rating={4}
					/>
				</div>
			</div>
			<div className="sound-container">
				<div className="sound">
					<div className="sound-text">
						<h1>What's that sound?</h1>
						<h2>Common noises and what they mean</h2>
						<h3>Squeaking</h3>
						<p>
							A squeaking noise while you drive often indicates a brake disc or
							brake caliper problem, especially if it repeats faster/slower as
							the car speeds up/down.
						</p>
						<h3>Screeching</h3>
						<p>
							A screeching sound when applying the brakes usually means the
							brake pads are worn down and need replacing.
						</p>
						<h3>Knocking</h3>
						<p>
							A knocking sound could result from a part coming loose, and should
							be addressed right away.
						</p>
						<h2>
							If you’re experiencing any of these noises, book your appointment
							now!
						</h2>
					</div>
					<div className="sound-image">
						<img src={soundImage} id="noise" />

						{/* <CTAimage /> */}
					</div>
				</div>
			</div>
			<div>
				<ContactFooter />
			</div>
		</>
	)
}

export default Home
