import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		if (params.type && params.uid) {
			actions.saveItemDetails(params.type, params.uid)
		}
	}, [])
	return (
		<div className="container">
			<h1 className="display-4">{store.itemDetails.properties && store.itemDetails.properties.name}</h1> 
			

			{/* <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */}
		</div>
	);
};


