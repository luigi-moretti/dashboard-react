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
            title: {
                text: 'Linha do tempo',
                subtext: 'Em milhares de dólares'
            },
            legend: {
                right:'center',
                bottom:0,
                orient:'horizontal',
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: anos
            },
            yAxis: {},
            series: [
                {
                    type: 'bar',
                    name: 'Total',
                    data: total
                },
                {
                    type: 'bar',
                    name: 'E-commerce',
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