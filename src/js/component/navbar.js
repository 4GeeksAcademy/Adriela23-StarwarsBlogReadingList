import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-style justify-content-center">
			<div className="row align-items-center">

				<div className="col-auto">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link text-light" href="https://www.tiktok.com/@starwars"> <i className="fa-brands fa-tiktok"></i></a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="https://www.instagram.com/starwars/"> <i className="fa-brands fa-instagram"></i></a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="https://www.youtube.com/user/starwars"> <i className="fa-brands fa-youtube"></i></a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699"> <i className="fa-brands fa-facebook"></i></a>
						</li>
					</ul>
				</div>


				<div className="col text-center">
					<a className="navbar-brand text-light" href="">
						<img src="https://yt3.googleusercontent.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s900-c-k-c0x00ffffff-no-rj"
							style={{ width: "120px" }} />
					</a>
				</div>



				<div className="col-auto">
					<div className="d-flex" role="search">
						<button className="btn text-light" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
						<div>
							<button class="btn btn-outline-warning dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</div>


				</div>

			</div>

		</nav>


	);
};
