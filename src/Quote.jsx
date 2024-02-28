import React, { useEffect, useState } from 'react'
import "./quote.css"
import axios from 'axios'
function Quote() {


    const[quote,setQuote]=useState({});

const fetchRandomQuote=async()=>{
    const response=await axios.get("https://dummyjson.com/quotes")
    const quotes=response.data.quotes;
    const randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(randomQuote);
}

useEffect(()=>{
fetchRandomQuote()
},[])
  return (
    <>
    <div className='boxx shadow'>
       <h2><i class="fa-solid fa-quote-left"></i> &nbsp; {quote.quote} 
       &nbsp;<i class="fa-solid fa-quote-right"></i> </h2>
       <br />
       <h3 style={{textAlign:'end'}}> { quote?.author}</h3>
       <br />
      
    </div>
    <div style={{textAlign:"center",marginTop:"30px"}}>
    <button className='btn btn-danger' onClick={fetchRandomQuote}>New Quote  &nbsp;<i class="fa-solid fa-arrows-rotate"></i></button>
    </div>
    </>
  )
}

export default Quote