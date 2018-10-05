import React, { Component } from 'react';
import './styles/favourit.css';


class Favourit extends Component{
    render(){
        //console.log(this.props.favouritlist);
        if(this.props.favouritlist !==undefined){
            var favouriteplaces=this.props.favouritlist.map((placename)=>{
                return(
                    <li key={placename}>
                        <div className="container list">
                            <div className="row">
                                <div className="alert-group">
                                    <div className="alert alert-success alert-dismissable">
                                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                        <strong>{placename}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })
        }
            return(
                <div>
                <h1>My favourite list:</h1>
                <ul>
                    {favouriteplaces}
                </ul>

                   
                </div>
            );
        
    }
}

export default Favourit;
