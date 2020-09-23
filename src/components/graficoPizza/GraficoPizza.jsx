import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class GraficoPizza extends Component{
    render(){
        return(
            <ReactEcharts
            option = {{
                title: {
                    text: 'Título Gráfico',
                    subtext: 'subtítulo',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['Notebooks', 'Acessórios', 'Vestuário', 'Automóveis', 'Alimentação']
                },
                series: [
                    {
                        name: 'Quantidade',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: 'Notebooks'},
                            {value: 310, name: 'Acessórios'},
                            {value: 234, name: 'Vestuário'},
                            {value: 135, name: 'Automóveis'},
                            {value: 1548, name: 'Alimentação'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }}
            
            
            />
        );
    }
}

export default GraficoPizza;