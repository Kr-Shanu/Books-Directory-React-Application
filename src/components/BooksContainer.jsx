import React from "react";
import bookList from "../bookList";
import {Cards, favourite_List} from "./Cards";

function BooksContainer(props) {

    const searchedValue = props.searchedItem;
    const len = searchedValue.length;
    // console.log("Length of the searched value = " + len);

    var filtered = bookList.filter(data => {
        return (
            ((data.name).substring(0, len)).toLowerCase() === searchedValue.toLowerCase()
        )
    });

// isFavclicked tells us that whether the user has clicked the fav button or not 
    if(props.isFavClicked){
        filtered = favourite_List.filter(data => {
            return (
                ((data.name).substring(0, len)).toLowerCase() === searchedValue.toLowerCase()
            )
        });
    }

        return (
            <div className="container bookcontainer">
                <div className="row" >
                    {(filtered.map)(data => {
                        return (
                            <Cards
                                id={data.id}
                                key={data.id}
                                bookName={data.name}
                                bookDetails={data.details.substring(0, 80)}
                                image={data.img}
                                fav={data.fav}
                                year={data.year}
                            />
                        );
                    })}
                </div>
            </div>
        );
    
}

export default BooksContainer;