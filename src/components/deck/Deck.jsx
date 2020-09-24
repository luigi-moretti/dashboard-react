import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import CardTop from '../cardTop';
import dataTotalEcommerce from '../../dados/DadosTotal';

class Deck extends Component{
    getQtdTotal = () =>{
        let qdtTotal = [];
        let anos = [];

        Object.entries(dataTotalEcommerce).forEach(entry => {
            anos = [...anos, entry[0]];
        });

        qdtTotal = dataTotalEcommerce[anos.pop()].map(item => {
            let total = item.total;
            return total;
        });
        
        return qdtTotal;
    }

    getQtdEcommerce = () =>{
        let qtdEcommerce = [];
        let anos = [];


        Object.entries(dataTotalEcommerce).forEach(entry => {
            anos = [...anos, entry[0]];
        });

        qtdEcommerce = dataTotalEcommerce[anos.pop()].map(item => {
            let ecommerce = item.ecommerce;
            return ecommerce;
        });

        return qtdEcommerce;
    }

    getPercentualEcommerce = () =>{
        let qtdEcommerce = this.getQtdEcommerce();
        let getQtdTotal = this.getQtdTotal();
        let percentual = Math.round((qtdEcommerce/getQtdTotal)*100);

        return percentual;
    }

    render(){
        return(
            <CardDeck>
                <CardTop
                    titulo = 'Vendas totais último ano'
                    texto = {this.getQtdTotal()}
                />
                <CardTop
                    titulo = 'Vendas e-commerce último ano'
                    texto = {this.getQtdEcommerce()}
                />
                <CardTop
                    titulo = 'Percentual e-commerce último ano'
                    texto = {this.getPercentualEcommerce()+ ' %'} 
                />
            </CardDeck>
        );
    }
}

export default Deck;