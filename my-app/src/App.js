import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <div>
         <Search />
         <div className="row result">
           <div className="col-md-8 listing-block">
              <List />
           </div>
           <div className="col-md-4 map-box mx-0 px-0">

           </div>
         </div>
      </div>
     
    );
  }
}

export default App;
