import {Circle, HStack, Text} from '@chakra-ui/react';

export default function LegendItem({label, value, color}) {
    return (
        <HStack>
            <Circle size="10px" bg={color}/>
            <Text fontSize="sm" color={"gray.600"}>{label} - {value}</Text>
        </HStack>
    );
}
