import './App.css';
import { useState } from 'react';

function App() {

  const[drinks,setDrinks] = useState([]);

  function getDrinksOnClick () {
    fetch ('https://the-cocktail-db.p.rapidapi.com/popular.php', {
      method: 'GET',  
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
    }).then(res => res.json()).then(data => {
      setDrinks(data.drinks);
    })
  }
  

  return (
    <div>
      <button onClick={getDrinksOnClick}>Get Drinks</button>
      {
        drinks.map(d => {
          return(
            <div>
              { d.strDrink }
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
