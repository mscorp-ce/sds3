import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sales';

function DonutChart() {

    type ChartData = {
        labels: string[];
        series: number[];
    } 

    let chartData : ChartData = {labels: [], series: []};

    axios.get(" https://sds3-ms.herokuapp.com/sales/sum-by-seller").then(response => {
        const data = response.data as SaleSum[];
        const myLables = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        chartData = { labels: myLables, series: mySeries};

        console.log(chartData);
    });

 //   const mockData = {
//        series: [477138, 499928, 444867, 220426, 473088],
//        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
//    }
    
    const options = {
        legend: {
            show: true
        }
    }
    
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;

