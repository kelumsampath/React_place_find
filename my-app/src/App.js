import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import List from './components/list';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      placelist:{}
    }
  }
  setplacelist(places){
    this.setState({
      placelist:places
    })
  }
  render() {
    return (
      <div>
         <Search setplaceslist={this.setplacelist.bind(this)}/>
         <div className="row result">
           <div className="col-md-8 listing-block">
              <List placeslist={this.state.placelist}/>
           </div>
           <div className="col-md-4 map-box mx-0 px-0">

           </div>
         </div>
      </div>
     
    );
  }
}

export default App;
