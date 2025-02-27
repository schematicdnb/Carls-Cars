import { useState } from "react"
import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mechanics from "./pages/Mechanics"
import CustomNav from "./components/Navbar"
import Services from "./pages/Services"
import Book from "./pages/Book"
import Confirmation from "./pages/Confirmation"
import Contact from "./pages/Contact"

function App() {
	return (
		<>
			<Router>
				<div>
					<CustomNav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/mechanics" element={<Mechanics />} />
						<Route path="/services" element={<Services />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/book" element={<Book />} />
						<Route path="/confirmation" element={<Confirmation />} />
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App
