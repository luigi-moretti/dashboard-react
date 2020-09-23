import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import CardTop from '../cardTop';

class Deck extends Component{
    render(){
        return(
            <CardDeck>
                <CardTop/>
                <CardTop/>
                <CardTop/>
            </CardDeck>
        );
    }
}

export default Deck;