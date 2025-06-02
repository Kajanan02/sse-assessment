import React from 'react';
import {Box} from "@chakra-ui/react";
import LazyWrapper from "../wrappers/LazyWrapper.jsx";
import UserStatsCard from "../organisms/UserStatsCard.jsx";
import ActivityLog from "../organisms/ActivityLog.jsx";

function DashboardActivityTemplate(props) {
    return (
        <Box>
            <LazyWrapper fallback={<Box>Loading UserStats...</Box>}>
                <UserStatsCard/>
            </LazyWrapper>
            <LazyWrapper fallback={<Box>Loading dashboard...</Box>}>
                <ActivityLog/>
            </LazyWrapper>
        </Box>
    );
}

export default DashboardActivityTemplate;
