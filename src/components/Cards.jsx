import React from "react";

function Cards(props) {

    return (
        <div className="card" >
            <img className="card-img-top" src={props.image} alt={props.bookName}></img>
                <div className="card-body" >
                    <h5 className="card-title">{props.bookName}</h5>
                    <p className="card-text">{props.bookDetails} ...</p>
                    <a href="www.google.com" className="btn btn-primary" >View More</a>
                </div>
        </div>
    );
}

export default Cards;