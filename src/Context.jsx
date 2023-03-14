import React, { useEffect, useState, useContext, useReducer } from 'react';


const ContextAPi = React.createContext();

const AppProvider=({children}) => {

   const API_URL =  `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
   const [update, setUpdate] = useState([]);
   const [movie, setMovie] = useState([]);
   const [searching, setSearching] = useState('batman');
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({show:"false", msg:""})
   
  
      // Searching......
   const getMovies = async (link)=>{
    setLoading(true);
       try{
              const res= await fetch(link);
              const data=  await res.json();
               if(data.Response === "True"){ 
                setLoading(false);   
              setError({
                            show:false,
                            msg:"",
               });
              setMovie(data.Search);
               }else{
                     setError({
                            show:true,
                            msg:"movie not found",
                     });
               }
       }catch(error){
           console.log(error)   
       }
    }
   useEffect(() => {
     var Timeout = setTimeout(()=>{
          getMovies(`${API_URL}&s=${searching}`);
       }, .500);
       return() => clearTimeout(Timeout);
       },[searching]);
      
       
return <ContextAPi.Provider value={{movie,searching,setSearching,error,loading}}>
{children}
</ContextAPi.Provider>
}
// custom hook
const GlobalContext = () =>{
  return useContext(ContextAPi);
};

export {AppProvider, ContextAPi, GlobalContext};