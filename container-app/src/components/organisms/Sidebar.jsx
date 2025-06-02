import React from 'react';
import {Box, Text, VStack} from "@chakra-ui/react";
import LinkButton from "../molecules/LinkButton.jsx";
import {dashboard} from "../../data/data.js";

function Sidebar(props) {
    return (
        <VStack w="250px" h="100vh" bg="gray.200" p={4} align="flex-start" spacing={4}>
            <Box w="full" bg="purple.500" p={2} textAlign="center" mb={5} rounded="lg">
                <Text fontWeight="bold">Logo</Text>
            </Box>
            {dashboard.map((item, index) => (
                <LinkButton key={index} item={item}/>
            ))}
        </VStack>
    );
}

export default Sidebar;
