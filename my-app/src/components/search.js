import React, { Component } from 'react';
import './styles/search.css'
class Search extends Component{
    search(e){
        e.preventDefault();
        console.log("clicked")
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
                                                <i className="fas fa-search h4 text-body"></i>
                                            </div>
                                            <div className="col">
                                                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"/>
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