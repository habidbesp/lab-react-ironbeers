import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'

export default class NewBeer extends Component {


    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: null,
        contributed_by: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
          })
      }


    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',{
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        })
        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: null,
            contributed_by: ''
        })
    }


    render() {
        return (
            <div>
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className="form">
                            <label htmlFor="name"><strong>Name:</strong></label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                value={this.state.name}
                                onChange= {this.handleChange}
                            
                            />
                        </div>
                        
                        <div className="form">
                            <label htmlFor="tagline"><strong>Tagline</strong></label>
                            <input 
                                type="text" 
                                name="tagline" 
                                id="tagline"
                                value={this.state.tagline}
                                onChange= {this.handleChange}
                            />
                        </div>
                        
                        <div className="form">
                            <label htmlFor="description"><strong>Description:</strong></label>
                            <input 
                                type="textarea" 
                                name="description" 
                                id="description"
                                
                                value={this.state.description}
                                onChange= {this.handleChange}
                            />
                        </div>
                        
                        <div className="form">
                            <label htmlFor="first_brewed"><strong>First Brewed:</strong></label>
                            <input 
                                type="text" 
                                name="first_brewed" 
                                id="first_brewed"
                                value={this.state.first_brewed}
                                onChange= {this.handleChange}
                            />
                        </div>
                        
                        <div className="form">
                            <label htmlFor="brewers_tips"><strong>Brewers tips:</strong></label>
                            <input 
                                type="text" 
                                name="brewers_tips" 
                                id="brewers_tips"
                                value={this.state.brewers_tips}
                                onChange= {this.handleChange}
                            />
                        </div>
                        
                        <div className="form">
                            <label htmlFor="attenuation_level"><strong>Attenuation level:</strong></label>
                            <input
                                type="number"
                                name="attenuation_level"
                                id="attenuation_level"
                                value={this.state.attenuation_level}
                                onChange= {this.handleChange}
                            />
                        </div>
                            
                        
                        <div className="form">
                            <label htmlFor="contributed_by"><strong>Created by:</strong></label>
                            <input 
                                type="text" 
                                name="contributed_by" 
                                id="contributed_by"
                                value={this.state.contributed_by}
                                onChange= {this.handleChange}
                            />
                        </div>
                        
                        <div className="form">
                            <button className="btn-single" type="submit">Add a new beer</button>
                        </div> 
                    </div>               
                </form>
                
            </div>
        )
    }
}
