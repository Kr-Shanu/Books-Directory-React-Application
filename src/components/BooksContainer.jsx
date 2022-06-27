import React from "react";
import bookList from "../bookList";
import Cards from "./Cards";



function BooksContainer(props) {

    const searchedValue = props.searchedItem
    const len = searchedValue.length;
    // console.log("Length of the searched value = " + len);

    const filtered = bookList.filter(data => {
        return (
            ((data.name).substring(0, len)).toLowerCase() === searchedValue.toLowerCase()
        )
    });

    // console.log(filtered);


        return (
            <div className="container bookcontainer">
                <div className="row" >
                    {(filtered.map)(data => {
                        return (
                            <Cards
                                key={data.id}
                                bookName={data.name}
                                bookDetails={data.details.substring(0, 80)}
                                image={data.img}
                            />
                        );
                    })}
                </div>
            </div>
        );
    
}

export default BooksContainer;