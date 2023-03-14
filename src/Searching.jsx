import React from 'react'
import { GlobalContext } from './Context'
import { NavLink } from 'react-router-dom';
import './App.css';

const Searching = () => {
 const {movie,searching,setSearching,error,loading} = GlobalContext();
 if(loading){
  return(
    <>
    <div className='text-center mb-4 mt-3'>
    <h2 className='mb-2 text-white' style={{fontFamily:'roman'}}>Search Your Favourite Movie</h2>
       <div className="search">
                 <input type="text" placeholder="Search" value={searching} onChange={(e) => setSearching(e.target.value)}/>
                        </div>
       <h6 className='mt-2 text-white'>{error.show && error.msg}</h6>
        </div>
  <div className='loader text-center '></div>
  </>
  )
 };
return (
    <>
    <div className='text-center mb-4 mt-3'>
      <h2 className='mb-2 text-white' style={{fontFamily:'roman'}}>Search Your Favourite Movie</h2>
          <div className="search">
                     <input type="text" placeholder="Search" value={searching} onChange={(e) => setSearching(e.target.value)}/>
                     </div>
       <h6 className='mt-2'>{error.show && error.msg}</h6>
        </div>
        
  <div className="container">
    <div className="row d-flex justify-content-center text-center">
    
        {
                     movie.map((curItem) =>{
                           const {imdbID, Poster,} = curItem;
                      return(
                            <>
              <div className="col-lg-4 col-md-4 col-12 p-lg-4 p-sm-3 mt-3 ">
                <NavLink  to={`movie/${imdbID}`}>   
               <img src={Poster} alt="image"/>
             </NavLink>
    </div>
    </>
                      )
                     })
                   } 
                    
  </div>  
  </div>
    </>
    
  )
                  
}

export default Searching