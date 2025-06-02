import React from 'react';
import {Box, SimpleGrid} from "@chakra-ui/react";
import UserStats from "../molecules/UserStats.jsx";
import {useUserStats} from "../../hooks/useUserStats.js";
import LoadingState from "../atoms/LoadingState.jsx";
import ErrorState from "../atoms/ErrorState.jsx";

function UserStatsCard() {

    const {stats, loading, error} = useUserStats();

    if (loading) return <LoadingState message="Loading user stats..."/>;
    if (error) return <ErrorState message={error}/>;

    return (
        <Box bg="white" boxShadow="md" borderRadius="md" p={5}>
            <SimpleGrid columns={{base: 1, sm: 2, md: 3}} spacing={5}>
                {stats.map((item, index) => (
                    <UserStats item={item} key={index + "userStats"}/>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default UserStatsCard;
