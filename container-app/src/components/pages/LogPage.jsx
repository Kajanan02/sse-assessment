import React, {useEffect} from 'react';
import LazyWrapper from "../wrappers/LazyWrapper.jsx";
import {Box} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {fetchActivityLog} from "../../features/activityLog/index.js";

const Log = React.lazy(() => import('log/LogPage'));


function LogPage(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActivityLog());
    }, []);

    return (
        <LazyWrapper fallback={<Box>Loading Logs...</Box>}>
            <Log/>
        </LazyWrapper>
    );
}

export default LogPage;
