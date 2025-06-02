import React from 'react';
import {Box, Spinner, Text} from '@chakra-ui/react';

function LoadingState({message = "Loading..."}) {
    return (
        <Box textAlign="center" py={10}>
            <Spinner size="xl" color="purple.500"/>
            <Text mt={4}>{message}</Text>
        </Box>
    );
}

export default LoadingState;
