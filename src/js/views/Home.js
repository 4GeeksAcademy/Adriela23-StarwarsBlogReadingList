import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/Card";

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		<div className="container">
			<div className="text-white">
				<h1>Characters</h1>
			</div>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.characters.map((character) => {
					return (
						<Card key={character.name} item={character} type="people" />
					);
				})}
			</div>
			<div className="text-white">
				<h1>Planets</h1>
			</div>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.planets.map((planet) => {
					return (
						<Card key={planet.name} item={planet} type="planets" />
					);
				})}
			</div>
			<div className="text-white">
				<h1>Vehicles</h1>
			</div>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.vehicles.map((vehicle) => {
					return (
						<Card key={vehicle.name} item={vehicle} type="vehicles" />
					);
				})}
			</div>



		</div >
	);
};

