import {Table} from '@chakra-ui/react';
import TableCellText from '../atoms/TableCellText';

function ActivityRow({message, time}) {
    return (
        <Table.Row bg={"white"}>
            <Table.Cell><TableCellText>{message}</TableCellText></Table.Cell>
            <Table.Cell><TableCellText>{time}</TableCellText></Table.Cell>
        </Table.Row>
    );
}

export default ActivityRow;
