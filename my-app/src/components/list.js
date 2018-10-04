import React,{Component} from 'react';
import './styles/list.css';

class List extends Component{
    
    render(){
       console.log("myplaces",this.props.placeslist.results)
       if(this.props.placeslist.results !== undefined){
        const listItems = this.props.placeslist.results.map((place) =>{
        return(
            <li key={place.id}>{place.name}</li>
        )
        }
);
    }
        return(
            <ul>{this.listItems}</ul>
        );
    }
}
export default List;

/*
<div>
                <ul>
            <section className="search-box">
                <div className="container-fluid">
                    <div className="media">
                        <div className="fav-box"><i className="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                        <img className="d-flex align-self-start" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
                        <div className="media-body pl-3">
                            <div className="price"><small>{listItems}</small></div>
                            <div className="stats">
                                <span><i className="fa fa-arrows-alt"></i>1678 Sq ft</span>
                                <span><i className="fa fa-bath"></i>2 Beadrooms</span>
                            </div>
                            <div className="address">4062 Walnut Hill Drive
                        Cincinnati</div>
                        </div>
                        </div>
                        
            
                    
            </div>
            </section>
            </ul>
            </div>*/