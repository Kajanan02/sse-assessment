import {Box, Heading} from '@chakra-ui/react';
import ActivityItem from '../molecules/ActivityItem';
import {useActivityLog} from '../../hooks/useActivityLog';
import LoadingState from '../atoms/LoadingState';
import ErrorState from '../atoms/ErrorState';

const ActivityLog = () => {
    const {logs, loading, error} = useActivityLog();

    if (loading) return <LoadingState message="Loading activity..."/>;
    if (error) return <ErrorState message={error}/>;

    return (
        <Box bg="white" boxShadow="md" borderRadius="md" mt={20} p={6}>
            <Heading color={"gray.600"} size="md" mb={4}>Activity log</Heading>
            {logs.map((log, index) => (
                <ActivityItem key={index} message={log.message} time={log.time}/>
            ))}
        </Box>
    );
};

export default ActivityLog;
