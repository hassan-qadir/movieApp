import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movie = () => {
  const {id} = useParams();
  const history = useNavigate();
  const API_URL =  `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
   const [movie, setMovie] = useState("");


    const getMovies = async (url)=>{
       try{
              const res= await fetch(url);
              const data=  await res.json();
               if(data.Response === "True"){    
              setMovie(data);
               }
       }catch(error){
           console.log(error)   
       }
      }
   useEffect(() => {
     var Timeout = setTimeout(()=>{
         getMovies(`${API_URL}&i=${id}`);
       }, .800);
       return() => clearTimeout(Timeout);
       },[id]);
     const backbtn =()=>{
        history('/')
     }
     
    return (
    <>
     <div className="container mt-3">
    <div className="row d-flex justify-content-center text-center">
    <div className="col-lg-12 col-md-12 col-12 p-4">   
    <img src={movie.Poster} alt="image"/>
    <div className='text-white'>
    <h5 className="card-title mt-2">{movie.Title}</h5>
    <p className="card-text">{movie.Language}</p>
    <p className="card-text">{movie.Year}</p>
    <p className="card-text">{movie.Genre}</p>
    <p className="card-text">{movie.Runtime}</p>
    </div>
    <button className='btn-btn-dark' style={{borderRadius:'1rem', padding:'10px',border:'none'}} onClick={backbtn}>Go Back</button>
    
   
    </div>
    </div>
    </div>
    </>
  )
}

export default Movie