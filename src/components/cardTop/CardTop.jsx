import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class CardTop extends Component{
    render(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Vendas totais último ano</Card.Title>
                    <Card.Text>433,692</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardTop;