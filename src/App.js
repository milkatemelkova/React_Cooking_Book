import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import Loading from './Loading';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const API_ID = "6f5d20b7";
  const API_KEY = "c6a7010f0b54b7531de51f291a650dcb";

  const [allRecipe, setRecipe] = useState([]);
  const[search,setSearch]=useState("");
  const [query, setQuery]=useState('lemon');
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
   

    const responce = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const finalData = await responce.json();
    setRecipe(finalData.hits);
    setLoaded(true);
    setSearch('');
    
    
  }; 
  const updateSearch = e =>{
    setSearch(e.target.value)
  }; 
  const getSearch = e =>{
    e.preventDefault();
    if (!search){
     alert ('Please enter a valid food!')
      
    } else {
    setQuery(search);
    setLoaded(false);
    setSearch('');
   
    }
  } 

  
  return (
    
    <div className="App">
    
    
      <form onSubmit={getSearch} className="form">
        <input type="text" className="input mt-5" value={search} onChange={updateSearch} placeholder="Search for a recipe..."></input>
        <button type="submit" className="search mt-5">Search</button>
      
      </form>
      <h4 className="text-center mt-5 mb-3 text-muted">The Most Loved Recipes</h4>
      <div className="d-flex justify-content-around flex-wrap">
        
      {(() => {
            switch (loaded) {
              case true: return (
                allRecipe.map((r) => (
                  <Recipe
                    key={r.recipe.label}
                    title={r.recipe.label}
                    label={r.recipe.label}
                    calory={r.recipe.calories}
                    Diet={r.recipe.dietLabels}
                    healthLabels={r.recipe.healthLabels}
                    time={r.recipe.totalTime}
                    image={r.recipe.image}
                    ingredients={r.recipe.ingredients}
                    url={r.recipe.url}
                  />

                ))
              )
              case false: return (<Loading />)
              default: return (<Loading />)
            }
          })()}
      </div>
    </div>
  );
}

export default App;
