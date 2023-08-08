import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import tatooine from "../../img/tatooine.webp";

export const Card = ({ item, type}) => {





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
                    <button className="btn btn-outline-warning"><i className="fa-solid fa-heart"></i>
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