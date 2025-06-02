import {VStack} from "@chakra-ui/react";
import ErrorCode from "../atoms/ErrorCode";
import ErrorMessage from "../atoms/ErrorMessage.jsx";
import HomeButton from "../atoms/HomeButton";

function ErrorContent() {
    return (
        <VStack spacing={4}>
            <ErrorCode/>
            <ErrorMessage/>
            <HomeButton/>
        </VStack>
    );
}

export default ErrorContent;
