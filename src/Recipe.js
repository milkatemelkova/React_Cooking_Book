import React from "react";
import style from './food.module.css';


const Recipe = ({ title, image, calory, ingredients, url, label, Diet, healthLabels, ...rest }) => {
  


  return (
    
    <div className={style.food}>
      <img className={style.image} src={image} alt={label}></img>
     <div className="card-body">
      <h1>{title}</h1>
      <p className="calory">Calories : {Math.round(calory)}</p>
      <p> {Diet}</p>
      <div> {healthLabels.map((label, i) => (
      <li className = "health-labels" key = {i} >{label}</li>))}
      </div>
     
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      
    </div>
      <a href={url} target="_blank" className="btn btn-warning" rel="noopener noreferrer" role="button">Recipe Details</a>
      </div>
  );
  
}
export default Recipe;
