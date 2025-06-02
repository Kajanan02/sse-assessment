import {Text} from "@chakra-ui/react";

function ErrorMessage() {
    return (
        <Text fontSize="xl" mt={4} mb={8} color="gray.600">
            The page you're looking for does not seem to exist.
        </Text>
    );
}

export default ErrorMessage;
