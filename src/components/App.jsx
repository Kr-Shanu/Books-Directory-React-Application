import React, { useState } from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import BooksContainer from "./BooksContainer";

function App() {

    const[searchedBook, setSearchedBook] = useState("");


    function searchFunction(event){
        console.log(event.target.value);
        const newSearch = event.target.value;
        setSearchedBook(newSearch);
    }


    return (
        <div>
            <Header 
            searchFunction={searchFunction}
            />
            <BooksContainer 
            searchedItem={searchedBook}
            />
            <Footer />
        </div>
    );
}

export default App;