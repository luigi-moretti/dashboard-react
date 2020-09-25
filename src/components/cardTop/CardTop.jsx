import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class CardTop extends Component{
    render(){
        return(
            <Card>
                <Card.Body className='text-center' >
                    <Card.Title>{this.props.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitulo}</Card.Subtitle>
                    <Card.Text style={{ fontSize: '2.3rem' }} >{this.props.texto}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardTop;