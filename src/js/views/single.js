import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(params)

	useEffect(() => {
		if (params.type && params.uid) {
			actions.saveItemDetails(params.type, params.uid)
		}
	}, [])
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-6">
					<img src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${store.itemDetails.uid}.jpg`} />
				</div>
				<div className="col-12 col-md-6">
					<h1 className="display-4 text-center text-white">{store.itemDetails.properties && store.itemDetails.properties.name}</h1>
					<p className="text-center text-white">{store.itemDetails.description}</p>
				</div>

			</div>
			<div className="row mt-3 text-white">
				{params.type == "people" ?
					<>
						<div className="col">
							<p>Birth year:</p><p>{store.itemDetails.properties?.birth_year}</p>
						</div>
						<div className="col">
							<p>Height:</p><p>{store.itemDetails.properties?.height}</p>
						</div>
						<div className="col">
							<p>Mass:</p><p>{store.itemDetails.properties?.mass}</p>
						</div>
						<div className="col">
							<p>Gender:</p><p>{store.itemDetails.properties?.gender}</p>
						</div>
					</> :
					params.type == "planets" ?
						<>
							<div className="col">
								<p>Diameter:</p><p>{store.itemDetails.properties?.diameter}</p>
							</div>
							<div className="col">
								<p>Rotation period:</p><p>{store.itemDetails.properties?.rotation_period}</p>
							</div>
							<div className="col">
								<p>Population:</p><p>{store.itemDetails.properties?.population}</p>
							</div>
							<div className="col">
								<p>Terrain:</p><p>{store.itemDetails.properties?.terrain}</p>
							</div>
							<div className="col">
								<p>Surface water:</p><p>{store.itemDetails.properties?.surface_water}</p>
							</div>
							<div className="col">
								<p>Climate:</p><p>{store.itemDetails.properties?.climate}</p>
							</div>
						</> :

						<>
							<div className="col">
								<p>Model:</p><p>{store.itemDetails.properties?.model}</p>
							</div>
							<div className="col">
								<p>Class:</p><p>{store.itemDetails.properties?.vehicle_class}</p>
							</div>
							<div className="col">
								<p>Cost:</p><p>{store.itemDetails.properties?.cost_in_credits}</p>
							</div>
							<div className="col">
								<p>Atmosphering speed:</p><p>{store.itemDetails.properties?.max_atmosphering_speed}</p>
							</div>
							<div className="col">
								<p>Length:</p><p>{store.itemDetails.properties?.length}</p>
							</div>
							<div className="col">
								<p>Passengers:</p><p>{store.itemDetails.properties?.passengers}</p>
							</div>
						</>}
			</div>

			{/* <h1 className="display-4">{store.itemDetails.properties && store.itemDetails.properties.name}</h1>
			<h1 className="display-4">{store.itemDetails.properties && store.itemDetails.properties.eye_color}</h1> */}

		</div>
	);
};


