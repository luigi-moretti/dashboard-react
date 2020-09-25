import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import dataEcommerce from '../../dados/Dados';

class GraficoDetalhes extends Component {


    getOption() {
        let etiqueta = [];
        let total = [];
     
        //Separa o Objeto de Dados em um array para as etiquetas
        Object.entries(dataEcommerce).forEach(entry => {
            entry[1].forEach(e => {
                etiqueta = [...new Set([...etiqueta, e.label])]
            });
        });

        //Pega os dados do ano do Gráfico
        total = dataEcommerce[2000].map(item => {
            let obj = {
                value: item.total,
                name: item.label
            }
            return obj;
        });

        //prepara os dados para o gráfico
        let baseOption = {
            title: {
                text: 'Quantidade de vendas',
                subtext: 'Ano 2000'
            },
            legend: {
                data:'Quantidade'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: etiqueta
            },
            series: [
                {
                    type: 'bar',
                    name: 'Quantidade',
                    data: total
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
                style={{ height: "30rem", top: 50}}            
            />
        );
    }
}

export default GraficoDetalhes;