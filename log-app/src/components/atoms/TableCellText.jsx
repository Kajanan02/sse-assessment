import {Text} from '@chakra-ui/react';

function TableCellText({children}) {

    return (
        <Text fontSize="sm" color="gray.800">
            {children}
        </Text>
    )
}

export default TableCellText;
