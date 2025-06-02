import {Box} from '@chakra-ui/react';
import TextLabel from "../atoms/TextLabel.jsx";

const ActivityItem = ({message, time}) => (
    <Box mb={4}>
        <TextLabel fontSize="sm" fontWeight="medium">{message}</TextLabel>
        <TextLabel fontSize="xs" mt={1}>{time}</TextLabel>
    </Box>
);

export default ActivityItem;
