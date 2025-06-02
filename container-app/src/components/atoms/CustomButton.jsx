import {Button} from '@chakra-ui/react';

const CustomButton = ({children, ...props}) => (
    <Button
        variant="ghost"
        _hover={{
            bg: 'purple.500',
            color: 'white',
        }}
        w="full"
        color="gray.700"
        {...props}
    >
        {children}
    </Button>
);

export default CustomButton;
