import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark pb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
						height="70"
						className="d-inline-block align-top"
						alt="starwars"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites{" "}
					<span className="badge badge-secondary">
						{/* count favorites
						 */}
					</span>
				</button>
				<div className="dropdown-menu dropdown-menu-right">
					<button className="dropdown-item" type="button">
						Action
					</button>
					<button className="dropdown-item" type="button">
						Another action
					</button>
					<button className="dropdown-item" type="button">
						Something else here
					</button>
				</div>
			</div>
		</nav>
	);
};
