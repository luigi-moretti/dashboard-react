import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import dataEcommerce from '../../dados/Dados';

class GraficoDetalhes extends Component {


    getOption() {
        let anos = [];
        let etiqueta = [];
        let total = [];
        let ano1 = this.props.ano;
        console.log(ano1);

        

        //Separa o Objeto de Dados em três Arrays
        Object.entries(dataEcommerce).forEach(entry => {
            anos = [...anos, entry[0]];
            entry[1].forEach(e => {
                etiqueta = [...new Set([...etiqueta, e.label])]
            });
        });

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
                left: '3%',
                right: '4%',
                bottom: '3%',
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
                style={{ height: "60vh", left: 50, top: 50}}            
            />
        );
    }
}

export default GraficoDetalhes;