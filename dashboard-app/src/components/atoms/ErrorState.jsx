import React from 'react';
import {Box, Text} from '@chakra-ui/react';

const ErrorState = ({message = "Something went wrong."}) => (
    <Box textAlign="center" py={10} color="red.500">
        <Text fontWeight="bold">Error:</Text>
        <Text>{message}</Text>
    </Box>
);

export default ErrorState;
