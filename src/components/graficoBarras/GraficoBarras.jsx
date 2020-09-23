import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class GraficoBarras extends Component{
    render(){
        return(
            <ReactEcharts
            option = {{
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['tipo', 'ecommerce', 'total'],
                        ['2015', 43.3, 85.8],
                        ['2016', 83.1, 73.4],
                        ['2017', 86.4, 65.2],
                        ['2018', 72.4, 53.9]
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                series: [
                    {type: 'bar'},
                    {type: 'bar'}
                ]
            }
            
            }
            
            />
        );
    }
}

export default GraficoBarras;