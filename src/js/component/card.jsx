import React from "react";
import "../../styles/card.css";

function Card() {
	return (
		<div className="card">
			<div className="card-body">
				<img
					className="card-img-top"
					src="https://static.umotive.com/img/product_image_thumbnail_placeholder.png"
					alt="Card image cap"
				/>
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some text here.</p>
				<a href="#" className="btn btn-primary btnCard">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export default Card;
