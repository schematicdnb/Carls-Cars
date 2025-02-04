import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Review from "./components/Review"

function App() {
	return (
		<>
			<div>
				<Router>
					<Navbar />
				</Router>
			</div>
			<div className="header-container">
				<Header />
			</div>
			<div className="review-container">
				<Review />
				<Review />
				<Review />
				<Review />
			</div>
		</>
	)
}

export default App
