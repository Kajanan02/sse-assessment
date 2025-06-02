import {Text} from "@chakra-ui/react";

const TextLabel = ({children, fontSize = "sm", fontWeight = "normal", color = "gray.600"}) => {
    return (
        <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
            {children}
        </Text>
    );
};

export default TextLabel;
