import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import dataTotalEcommerce from '../../dados/DadosTotal';

class GraficoBarras extends Component {

    getOption = () => {
        let anos = [];
        let total = [];
        let ecommerce = [];

        //Separa o Objeto de Dados em três Arrays
        Object.entries(dataTotalEcommerce).forEach(entry => {
            anos = [...anos, entry[0]];
            entry[1].forEach(e => {
                total = [...new Set([...total, e.total])]
            });
            entry[1].forEach(e => {
                ecommerce = [...new Set([...ecommerce, e.ecommerce])]
            });
        });

        //prepara os dados para o gráfico
        let baseOption = {
            legend: {},
            tooltip: {},
            xAxis: {
                type: 'category',
                data: anos
            },
            yAxis: {},
            series: [
                {
                    type: 'bar',
                    name: 'total',
                    data: total
                },
                {
                    type: 'bar',
                    name: 'e-commerce',
                    data: ecommerce
                }

            ]
        }

        return {
            baseOption
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
            />
        );
    }
}

export default GraficoBarras;