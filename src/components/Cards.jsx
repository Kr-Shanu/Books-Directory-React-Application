import React, { useState } from "react";

const favourite_List = [];

function Cards(props) {

    const [isClicked, setClick] = useState(false)


    function handleFav(){

        const newFavItem = {
            id:props.id,
            name:props.bookName,
            year:props.year,
            details:props.bookDetails,
            img:props.image,
            fav:props.fav
        }

        const isAlreadyPresent = favourite_List.find((data) =>{
            return data.id===props.id ? true:false;
        });

        if(isAlreadyPresent){
            for( var i = 0; i < favourite_List.length; i++){ 
    
                if ( favourite_List[i].id === props.id) { 
            
                    favourite_List.splice(i, 1); 
                }
            
            }
        }else{
            favourite_List.push(newFavItem);
        }


        // console.log(favourite_List);
        // take an array and store the name and info of the 
        // clicked books in that array and store it.

        setClick((prevValue)=>{
            return !prevValue;
        })
    }



    return (
        <div className="card" >
            <img className="card-img-top" src={props.image} alt={props.bookName}></img>
            <div className="card-body" >
                <h5 className="card-title">{props.bookName}</h5>
                <p className="card-text">{props.bookDetails} ...</p>
                <div>
                <span onClick={handleFav} style={{color:isClicked?"red":"white", padding:"6%"}}><i className="fa-solid fa-heart fa-xl"></i></span>
                    <a href="www.google.com" className="btn btn-primary" >View More</a>
                </div>
            </div>
        </div>
    );
}

export  {Cards, favourite_List};