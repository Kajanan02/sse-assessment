import {Box} from "@chakra-ui/react";
import ErrorContent from "../molecules/ErrorContent";

function NotFoundBlock() {
    return (
        <Box textAlign="center" py={20} px={6}>
            <ErrorContent/>
        </Box>
    );
}

export default NotFoundBlock;
