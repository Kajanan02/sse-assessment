import React, {useEffect} from 'react';
import LazyWrapper from "../wrappers/LazyWrapper.jsx";
import {Box} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {fetchUserStats} from "../../features/userStats/slice.js";
import {fetchDashboardData} from "../../features/dashboardData/slice.js";

const Dashboard = React.lazy(() => import('dashboard/DashboardPage'));


function DashboardPage(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserStats());
        dispatch(fetchDashboardData());
    }, []);


    return (
        <LazyWrapper fallback={<Box>Loading Dashboard...</Box>}>
            <Dashboard/>
        </LazyWrapper>
    );
}

export default DashboardPage;
