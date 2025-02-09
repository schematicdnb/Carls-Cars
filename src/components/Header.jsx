import React from "react"
import "./Header.css"
import defaultImg from "../assets/pexels-cottonbro-4489749.jpg"

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
		position: "relative",
		paddingTop: "5%",
		paddingBottom: "5%",
		fontSize: "24px",
		fontFamily: "'Open Sans', sans-serif",
	}

	return (
		<header
			className="header"
			style={{ position: "relative", height: "300px" }}
		>
			<div className="header-bg" style={headerBg}></div>
			<div className="header-content" style={headerContent}>
				<h1>
					{props.text
						? props.text
						: "Auto mechanics serving Ottawa motorists since 1989"}
				</h1>
				<button onClick={() => (window.location.href = "/book")}>
					BOOK APPOINTMENT
				</button>
			</div>
		</header>
	)
}

export default Header
