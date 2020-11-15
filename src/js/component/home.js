import React from "react";
import NavBar from "./NavBar.jsx";
import JumBotron from "./jumBotron.jsx";
import Footer from "./footer.jsx";
//include images into your bundle

import Card from "./card.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="d-flex justify-content-center">
				<JumBotron />
			</div>

			<div className="row d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
