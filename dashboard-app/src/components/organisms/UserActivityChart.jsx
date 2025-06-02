import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Box} from '@chakra-ui/react';
import {useDashboardData} from '../../hooks/useDashboardData.js';
import LoadingState from '../atoms/LoadingState.jsx';
import ErrorState from '../atoms/ErrorState.jsx';

const UserActivityChart = () => {
    const {activity, loading, error} = useDashboardData();

    if (loading) {
        return <LoadingState message="Loading user activity..."/>;
    }

    if (error) {
        return <ErrorState message={error}/>;
    }

    const chartOptions = {
        title: {text: 'User Activity'},
        xAxis: {
            categories: activity.map((item) => item.date),
            title: {text: null},
        },
        yAxis: {
            title: {text: 'User Count'},
        },
        series: [
            {
                name: 'Users',
                data: activity.map((item) => item.count),
                type: 'line',
            },
        ],
        accessibility: {
            enabled: false,
        },
        credits: {enabled: false},
    };

    return (
        <Box bg="white" boxShadow="md" borderRadius="md" p={6} mt={6}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
        </Box>
    );
};

export default UserActivityChart;
