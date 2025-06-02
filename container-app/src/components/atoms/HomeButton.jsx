import {Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function HomeButton() {
    return (
        <Button as={Link} to="/" colorScheme="blue" size="lg"
                _hover={{
                    bg: 'purple.500',
                    color: 'white',
                }}
                bg={"purple.200"}
                w="full"
                color="gray.700"
        >
            Go Back Home
        </Button>
    );
}

export default HomeButton;
