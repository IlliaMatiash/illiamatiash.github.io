import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

import './characters.css';

let numberPage = 1;
let numberLength = 0;

class Character extends Component{
    


    render(){
        return(
            <div className="cards">
                <img src={this.props.image} alt='' className="img" />
                <h3>Name: {this.props.name}</h3>
                <hr/>
                <h3>id: {this.props.id}</h3>
                <hr/>
                <h3>Gender: {this.props.gender}</h3>
                <hr/>
            </div>
        )
    }
}


class Characters extends Component {
    constructor(props){
        super(props)
        this.state = {
            characters:''
        }
        this.getToCharacters();
    }
    
    prev = () => {
        numberPage -=1;
        this.getToCharacters();
    }

    next = () => {
        numberPage +=1;
        this.getToCharacters();
    }

    
    getToCharacters = () => {
        if(numberPage === 1){
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(({data}) => {
            this.setState({characters: data.results})
            console.log(this.state.characters.length, "characters")
        })
        }else {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${numberPage}`)
        .then(({data}) => {
            this.setState({characters: data.results})
            console.log(this.state.characters)
        })
        }
    }
    
    render(){
        return(
            <div className="row">
            {this.state.characters ?  this.state.characters.map(character => 
                <Character {...character} key={character.id}/>
                
                ) : ''
            }
            
            {/*for(let i = 0; i < this.state.characters.length; i++ ){
                <Character {this.state.characters[i]} key={character.id}/>
            }   */}
            
            
            
            <div className="btn">
                <button onClick = {this.prev}><NavLink to="/">Prev</NavLink></button>
                <button onClick = {this.next}><NavLink to="/">Next</NavLink></button>
            </div>
                
            </div>
        )
    }
}


export default Characters;