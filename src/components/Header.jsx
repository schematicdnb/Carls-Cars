import React from "react"
import "./Header.css"
import defaultImg from "../assets/pexels-cottonbro-4489749.jpg"
import { useNavigate } from "react-router-dom"

const Header = (props) => {
	const headerBg = {
		backgroundImage: `url(${props.bgImg ? props.bgImg : defaultImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		filter: "blur(8px)",
		position: "absolute",
		width: "100%",
		height: "100%",
		zIndex: "-1",
	}

	const headerContent = {
		paddingTop: "5%",
		paddingBottom: "5%",
	}

	const navigate = useNavigate()

	return (
		<header className="header" style={{ position: "relative" }}>
			<div className="header-bg" style={headerBg}></div>
			<div className="header-content" style={headerContent}>
				<div className="header-text">
					<h1>
						{props.text
							? props.text
							: "Auto mechanics serving Ottawa motorists since 1989"}
					</h1>
				</div>
				<button onClick={() => navigate("/book")}>BOOK APPOINTMENT</button>
			</div>
		</header>
	)
}

export default Header
