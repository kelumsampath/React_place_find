import React,{Component} from 'react';
import './styles/list.css';

class List extends Component{
    
    render(){
       console.log("myplaces",this.props.placeslist.results)
       if(this.props.placeslist.results !== undefined){
        var listItems = this.props.placeslist.results.map((place) =>{
        return(
            <div key={place.id}>
                <li >
                 <section className="search-box">
                <div className="container-fluid">
                    <div className="media">
                        <div className="fav-box"><i className="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                        <img className="d-flex align-self-start" src={place.icon} alt="Generic placeholder image"/>
                        <div className="media-body pl-3">
                            <div className="price"><small>{place.name}</small></div>
                            <div className="stats">
                                <span><i className="fa fa-star checked"></i>{place.rating}</span>
                                <span><i className="fa fa-check-circle active"></i>{place.open_now}</span>
                            </div>

                            <div className="address">{place.formatted_address}</div>
                            <button type="button" className="btn btn-success" onClick={()=>this.props.addtofavourite(place.name)}>Add to favourite</button>
                        </div>
                        </div>
                        
            
                    
            </div>
            </section>
            </li>
            </div>
            
            
        )
        }
);
    }
        return(
            <ul>{listItems}</ul>
        );
    }
}
export default List;

/*
<div>
                <ul>
           
            </ul>
            </div>*/