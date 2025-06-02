import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import Sidebar from "../organisms/Sidebar.jsx";
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <Flex minH="100vh">
            <Sidebar/>
            <Box flex="1" p={4} bg="gray.50">
                <Outlet/>
            </Box>
        </Flex>
    );
}

export default AppLayout;
