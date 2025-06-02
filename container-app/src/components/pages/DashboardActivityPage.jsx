import React, {useEffect} from 'react';
import {Box} from "@chakra-ui/react";
import LazyWrapper from "../wrappers/LazyWrapper.jsx";
import {useDispatch} from "react-redux";
import {fetchUserStats} from "../../features/userStats/slice.js";
import {fetchActivityLog} from "../../features/activityLog/index.js";

const DashboardActivity = React.lazy(() => import('dashboard/DashboardActivityPage'));


function DashboardActivityPage(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserStats());
        dispatch(fetchActivityLog());
    }, []);

    return (
        <LazyWrapper fallback={<Box>Loading Dashboard...</Box>}>
            <DashboardActivity/>
        </LazyWrapper>
    );
}

export default DashboardActivityPage;
