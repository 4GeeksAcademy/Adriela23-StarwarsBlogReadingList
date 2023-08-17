import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import tatooine from "../../img/tatooine.webp";
import { Context } from "../store/appContext";

export const Card = ({ item, type}) => {
const {store, actions}= useContext(Context)
    return (
        <>
            <div className="card mt-3 mb-3" style={{ minWidth: "300px" }}>
                <img src={type == "planets" && item.uid == 1 ? tatooine : 
                `https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type }/${item.uid}.jpg`}
                    className="card-img-top">
                </img>
                <div className="card-body" style={{ background: "black" }}>
                    <h5 className="card-title text-light">{item.name}</h5>

                    <Link to={`/${type}/${item.uid}`}>
                        <button className="btn btn-outline-warning"> Read more
                        </button>
                    </Link>
                    <button className="btn btn-outline-warning" onClick={() => {
                        if (store.favorites.find((favorite) => favorite.favoriteName === item.name)){
                        //  aqui va el metodo para remover
                        actions.removeFavorite(item.name)
                        }else{
                            actions.addFavorite(item.name, `/${type}/${item.uid}`)
                        }

                    }}><i className={store.favorites.find((favorite) => favorite.favoriteName === item.name) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </button>

                </div>
            </div>

        </>
    );
};

Card.propTypes = {
	item: PropTypes.object,
    type: PropTypes.string
};