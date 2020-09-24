import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class CardTop extends Component{
    render(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.titulo}</Card.Title>
                    <Card.Text>{this.props.texto}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardTop;