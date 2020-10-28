import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Search from './component/Search';
import Results from './component/Results';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=36fc6aa5";

  const search = (e) => {
    if(e.key === "Enter"){
      axios(apiUrl + "&s=" + state.s).then(({ data}) =>{
        let results = data.Dearch;

        setState(prevState => {
          return{...prevState, results: results }
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });

  }
  return (
    <div className="App">
     <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App;
