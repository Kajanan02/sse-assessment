import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function UserPieChart({data}) {
    const options = {
        chart: {type: 'pie', height: 200, width: 200},
        title: {text: ''},
        series: [{
            name: 'Users',
            colorByPoint: true,
            data
        }],
        accessibility: {enabled: false},
        credits: {enabled: false},
        legend: {enabled: false}
    };

    return <HighchartsReact highcharts={Highcharts} options={options}/>;
}
