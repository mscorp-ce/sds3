import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sales';

type ChartData = {
    labels: string[];
    series: number[];
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get("https://sds3-ms.herokuapp.com/sales/sum-by-seller").then(response => {
            const data = response.data as SaleSum[];
            const myLables = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            setChartData({ labels: myLables, series: mySeries});
        });

    }, []); 

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

