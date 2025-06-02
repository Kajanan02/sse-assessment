import React from 'react';
import TextLabel from "../atoms/TextLabel.jsx";
import {Box, Stack, Text} from "@chakra-ui/react";

function UserStats({item}) {
    return (
        <Box>
            <Stack spacing={1}>
                <TextLabel fontSize="sm" fontWeight="bold">
                    {item?.title}
                </TextLabel>
                <Text fontSize="3xl" fontWeight="bold" color="black">
                    {item?.value}
                </Text>
                <TextLabel fontSize="sm" color="gray.500">
                    {item?.date}
                </TextLabel>
            </Stack>
        </Box>
    );
}

export default UserStats;
