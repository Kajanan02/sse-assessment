import React from 'react';
import {Box, Grid, GridItem} from "@chakra-ui/react";
import LazyWrapper from "../wrappers/LazyWrapper.jsx";
import UserStatsCard from "../organisms/UserStatsCard.jsx";
import UserActivityChart from "../organisms/UserActivityChart.jsx";
import DailyUsersCard from "../organisms/DailyUsersCard.jsx";

function DashboardTemplate(props) {
    return (
        <Grid templateColumns={{base: "1fr", md: "2fr 1fr"}} gap={12} p={6}>
            <GridItem>
                <LazyWrapper fallback={<Box>Loading UserStats...</Box>}>
                    <UserStatsCard/>
                </LazyWrapper>
                <LazyWrapper fallback={<Box>Loading dashboard...</Box>}>
                    <UserActivityChart/>
                </LazyWrapper>
            </GridItem>
            <GridItem>
                <LazyWrapper fallback={<Box>Loading Daily Users...</Box>}>
                    <DailyUsersCard/>
                </LazyWrapper>
            </GridItem>
        </Grid>
    );
}

export default DashboardTemplate;
