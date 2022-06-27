import React from "react";

function Search(props){

    return (
        <div className="search">
        <input 
        onChange={props.handleChange} 
        placeholder="Search Books Here!" 
        />
    </div>
    );

}

export default Search;