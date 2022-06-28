import React, { useState } from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import BooksContainer from "./BooksContainer";

function App() {

    const[searchedBook, setSearchedBook] = useState("");

    const[favButton, setFavButton] = useState("Favourite Books")

    // the array that has to be sent to books container to render


    function searchFunction(event){
        // console.log(event.target.value);
        const newSearch = event.target.value;
        setSearchedBook(newSearch);
    }

    const [isFav, setFav] = useState(false);

    function handleFavClickButton(){


        console.log("Favourite books clicked");


        setFavButton(prevValue =>{
            if(prevValue === "Favourite Books")
                return "Go Back";
            else if(prevValue === "Go Back")
                return "Favourite Books";
        });


        setFav((prevValue)=>{
            return !prevValue;
        })
    }


    return (
        <div>
            <Header 
            searchFunction={searchFunction}
            handleFavClick={handleFavClickButton}
            favButton={favButton}
            />
            <BooksContainer 
            searchedItem={searchedBook}
            isFavClicked={isFav}
            />
            <Footer />
        </div>
    );
}

export default App;