import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dataTotalEcommerce from '../../dados/DadosTotal';

class FormFiltro extends Component {
    constructor() {
        super();
        this.anos = []
        Object.entries(dataTotalEcommerce).forEach(entry => {
            this.anos = [...this.anos, entry[0]];
        });
    }

    _handleMudancaAno(evento){
        evento.stopPropagation();
        this.ano = evento.target.value;
      }

    _filtrar(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        console.log(this.ano);
    }


    render() {
        return (
            <Form inline onSubmit={this._filtrar.bind(this)}>
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                    Ano:
            </Form.Label>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    onChange={this._handleMudancaAno.bind(this)}
                >
                    <option value=''>Selecione um ano</option>
                    {
                        this.anos.map((ano, index) => {
                            return (
                                <option key={index} value={ano}>{ano}</option>
                            );
                        }
                        )
                    }
                </Form.Control>
                <Button type="submit" className="my-1">
                    Carregar Dados
            </Button>
            </Form>
        );
    }
}

export default FormFiltro;