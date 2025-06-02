import {Text, VStack} from '@chakra-ui/react';

export default function TextStat({label, value, ...props}) {
    return (
        <VStack>
            <Text fontSize="md" fontWeight="bold" color={"gray.600"}>
                {label}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color={"gray.600"}>
                {value}
            </Text>
        </VStack>

    );
}
