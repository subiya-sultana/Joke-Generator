import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [joke, setJoke] = useState(null);
  const randomJokeApi = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  const programmingJokeapi = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  
  const fetchRandomJokeData = async () => {
    try {
      const response = await fetch(randomJokeApi);
      const data = await response.json();
      setJoke(data);
      console.log("Fetched joke:", data);
    } catch (error) {
      setJoke("Error fetching joke...");
      console.error("Error fetching joke:", error);
    }
  };

  const fetchProgrammingJokeData = async () => {
    try {
      const response = await fetch(programmingJokeapi);
      const data = await response.json();
      setJoke(data);
      console.log("Fetched joke:", data);
    } catch (error) {
      setJoke("Error fetching joke...");
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchRandomJokeData();
  }, []); 

  function tellProgrammingJoke(){
    fetchProgrammingJokeData();
  }
  function tellRandomJoke(){
    fetchRandomJokeData();
  }
  return (
    <>
    <div className="App">
      <div className="card">
        <span>&#128514;</span>
        <p className="joke">
        { joke ? 
          (joke.type === "twopart" ? 
          (joke.setup + " " + joke.delivery) : 
          (joke.joke)):
          ("Loading joke...")
        }
        </p>
        <div className="buttons">
          <button onClick={tellRandomJoke}>Tell me a random joke</button>
          <button onClick={tellProgrammingJoke}>Tell me a programming joke</button>
        </div>
      </div>
    </div>
      <footer className="footer text-center bg-dark-subtle">
        made with &#9829; by subiya sultana
      </footer>
      </>
  );
}

export default App;
