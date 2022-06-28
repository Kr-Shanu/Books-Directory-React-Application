import React from "react";
import Clock from "../Clock";
import Search from "./Search";

function Header(props) {

    return (

        <div className="container-fluid" style={{backgroundColor: "#28323c", margin: "0px", paddingTop: "0.3%" }}>
            <div className="row" style={{color:"white"}} >
                <div className="col col-lg-4" >
                    <h2><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/bookshelf-1024.png" width="48px" alt="books symbol" />   Books Directory</h2>
                </div>
                <div className="col col-lg-4">
                    <div className="row">
                        <div className="col col-lg-8">
                            <h2 id="title">Enjoy Your Books</h2>
                        </div>
                        <div className="col col-lg-4" style={{paddingTop:"2%"}}>
                            <h4 id="favBookButton" className="nav-link btn btn-secondary btn-sm" onClick={props.handleFavClick}>{props.favButton}</h4>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className="row" style={{paddingTop:"2%"}}>
                        <div className="col-lg-6 col-md-6" style={{paddingLeft:"15%"}}>
                            <h2 id="clock" className="nav-link">  <Clock /> </h2>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Search
                                handleChange={props.searchFunction}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;