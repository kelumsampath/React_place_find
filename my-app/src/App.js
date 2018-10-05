import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import List from './components/list';
import Favourit from './components/favourit';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      placelist:{},
      favourit:[]
    }
  }
  setplacelist(places){
    this.setState({
      placelist:places
    })
  }
  addfavourite(placeName){
    var myplaces=this.state.favourit.concat([placeName]);
    this.setState({
      favourit:myplaces
    })
  }

  render() {
    return (
      <div>
         <Search setplaceslist={this.setplacelist.bind(this)}/>
         <div className="row result">
           <div className="col-md-8 listing-block">
              <List placeslist={this.state.placelist}
                    addtofavourite={this.addfavourite.bind(this)}
              />
           </div>
           <div className="col-md-4 map-box mx-0 px-0">
              <Favourit favouritlist={this.state.favourit}/>
           </div>
         </div>
      </div>
     
    );
  }
}

export default App;
