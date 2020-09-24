import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import dataTotalEcommerce from '../../dados/DadosTotal';

class GraficoPizza extends Component {
    getOption = () => {
        let anos = [];
        let ecommerce = [];
        let total = [];

        Object.entries(dataTotalEcommerce).forEach(entry => {
            anos = [...anos, entry[0]];
        });

        // total = dataTotalEcommerce[2000].map(item => {
        //     let obj = {
        //         value: item.total,
        //         name: 'total'
        //     }
        //     return obj;
        // });

        // ecommerce = dataTotalEcommerce[2000].map(item => {
        //     let obj = {
        //         value: item.ecommerce,
        //         name: 'ecommerce'
        //     }
        //     return obj;
        // });


        let series = [
            {
                name: 'Quantidade',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: ecommerce,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ];


        return {

            baseOption: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['total', 'ecommerce']
                },
                series
            }
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

export default GraficoPizza;