import React, { Component } from 'react';
import './styles/search.css';
import axios from 'axios'

class Search extends Component{
    search(e){
        e.preventDefault();
        const value=this.refs.inputword.value;
        const set=this.props;
       // console.log(value)
        axios.post('http://localhost:9000/findplace', {
           place:value
          })
          .then(function (response) {
            set.setplaceslist(response.data.place)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render(){
        return(
            <div className="container">
            <br/>
            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-8">
                                    <form className="card card-sm">
                                        <div className="card-body row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <i className="fa fa-search h4 text-body"></i>
                                            </div>
                                            <div className="col">
                                                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search by city name here" ref='inputword'/>
                                            </div>
                                            <div className="col-auto">
                                                <button className="btn btn-lg btn-success" onClick={this.search.bind(this)}>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
            </div>
            </div>
        );
    }
}

export default Search;