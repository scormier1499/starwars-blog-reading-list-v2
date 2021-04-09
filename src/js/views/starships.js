import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Starships = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="detailsbg">
			<div className="container mt-5 mb-5">
				{/* start description */}
				<div className="row">
					<div className="col mx-lg-n5">
						<img
							src="https://i.pinimg.com/originals/43/54/d3/4354d36812bdd8049b6e4a0f1a34e3cc.jpg"
							className="card-img-top"
						/>
					</div>
					<div className="col detailsdescription pt-4">
						<h3 className="detailsname">CR90 CORVETTE</h3>
						<p>
							simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has survived not only five centuries,
							but also the leap into electronic typesetting, remaining essentially unchanged.
						</p>
						<Link to="/">
							<button className="btn btn-warning">Back home</button>
						</Link>
					</div>
				</div>
				{/* end description */}
			</div>
		</div>
	);
};
