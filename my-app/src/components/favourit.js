import React, { Component } from 'react';


class Favourit extends Component{
    render(){
        console.log(this.props.favouritlist);
        if(this.props.favouritlist !==null){
            return(
                <h1>My favourite list:</h1>
                

            );
        }
    }
}

export default Favourit;
