import React from "react";
import Clock from "../Clock";
import Search from "./Search";


function Header(props) {




    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#as"><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/bookshelf-1024.png" width="48px" alt="books symbol" />   Books Directory</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#asdf"><img src="https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-2/24/bxs-home-circle-1024.png" width="24px" alt="homeSymbol" />  Home</a>
                        </li>
                    </ul>
                    <h1 id="title">Enjoy Your Books</h1>
                </div>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#asdf">Favourite Books</a>
                    </li>
                    <li className="nav-item active" id="clock">
                        <a className="nav-link" href="#asdf">  <Clock />   </a>
                    </li>
                </ul>

                <Search 
                handleChange={props.searchFunction}
                />

            </nav>
        </div>
    );
}

export default Header;