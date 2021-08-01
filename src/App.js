import React,{useState,useEffect} from 'react';
import axios from 'axios';

import Character from './components/Character.js'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])

  const getCharacters = () =>{
    axios.get("https://swapi.dev/api/people")
    .then(response => {
       setCharacters(response.data)
          }
       )
    .catch(error => {
      setCharacters([]);
    })
  }

  useEffect(()=>{getCharacters()},[])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters ={characters}/>
    </div>
  );
}

export default App;
