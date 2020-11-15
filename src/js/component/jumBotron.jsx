import React from "react";
import "../../styles/jumbotron.css";

function JumBotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello React!</h1>
			<p className="lead">
				This is a simple exercice using Bootstrap and React.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Button
				</a>
			</p>
		</div>
	);
}

export default JumBotron;
