import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mechanics from "./pages/Mechanics"
import Navbar from "./components/Navbar"
import Services from "./pages/Services"
import Book from "./pages/Book"

function App() {
	return (
		<>
			<Router>
				<div>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/mechanics" element={<Mechanics />} />
						<Route path="/services" element={<Services />} />
						<Route path="/book" element={<Book />} />
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App
