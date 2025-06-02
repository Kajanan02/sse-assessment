import React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import LazyWrapper from "../wrappers/LazyWrapper.jsx";
import ActivityLogTable from "../organisms/ActivityLogTable.jsx";

function ActivityLogTemplate(props) {
    return (
        <Box bg="white" p={6} mt={20} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={7} color={"gray.600"}>Activity Log</Heading>
            <LazyWrapper fallback={<Box>Loading dashboard...</Box>}>
                <ActivityLogTable/>
            </LazyWrapper>
        </Box>
    );
}

export default ActivityLogTemplate;
