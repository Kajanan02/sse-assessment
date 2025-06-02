import {Box, Heading, SimpleGrid, VStack} from '@chakra-ui/react';
import UserPieChart from '../molecules/UserPieChart';
import LegendItem from '../atoms/LegendItem';
import TextLabel from "../atoms/TextLabel.jsx";
import TextStat from "../atoms/TextStat.jsx";
import {useDashboardData} from "../../hooks/useDashboardData.js";
import LoadingState from "../atoms/LoadingState.jsx";
import ErrorState from "../atoms/ErrorState.jsx";


export default function DailyUsersCard() {

    const {roles, authMethods, loading, error} = useDashboardData();

    if (loading) {
        return <LoadingState message="Loading user activity..."/>;
    }

    if (error) {
        return <ErrorState message={error}/>;
    }

    return (
        <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={2} spacing={4} w="full">
                <VStack align="start" spacing={4}>
                    <TextLabel size="md" fontWeight="bold">Daily active users</TextLabel>
                    <TextLabel fontSize="4xl" fontWeight="bold">1051</TextLabel>


                    <VStack align="start" spacing={1}>
                        {roles.map((item, index) => (
                            <LegendItem key={index} label={item.name} value={item.y} color={item.color}/>
                        ))}
                    </VStack>


                </VStack>
                <UserPieChart data={roles}/>
            </SimpleGrid>
            <Heading color={"gray.600"} size="sm" pt={12}>By Authentication Method</Heading>
            <SimpleGrid columns={2} spacing={12} gap={10} w="full" mt={6}>
                {authMethods.map((item, index) => (
                    <TextStat key={index} label={item.label} value={item.value}/>
                ))}
            </SimpleGrid>

        </Box>
    );
}
