import { useEffect, useState } from "react"
import { CardDefault } from "./MyCard"

export const CardContainer =()=>{
    const [books, setBooks]= useState([]);

    useEffect(()=>{
        const getbooks = async () => {
            try {
                const response= await fetch("https://epibooks.onrender.com/");
            const data = await response.json()
            setBooks(data)
                
            } catch (error) {
                console.log(error)
            }

        }
    getbooks()
    },[]);
const maxCardToShow=20;
const visibleCard=books.slice(0,maxCardToShow);
    return(
<div className="flex justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-10 ">
        {visibleCard.map((book)=>
        <CardDefault
            key={book.asin}
            title={book.title}
            img={book.img}
            price={book.price}


        />
            )}
            </div>
    
    )
}