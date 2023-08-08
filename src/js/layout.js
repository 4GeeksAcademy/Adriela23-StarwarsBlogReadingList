import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home";
import { Characters } from "./views/Characters";
import { Planets } from "./views/Planets";
import { Vehicles } from "./views/Vehicles";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Card } from "./component/Card";
import { Single } from "./views/single";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route path="/characters" element={<Characters/>} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/vehicles" element={<Vehicles/>} /> */}
						<Route path="/:type/:uid" element={<Single/>} />

						{/* importa en componente card */}
						{/* <Route path="/card/:idCard" element={<Card/>}/> */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
				</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
