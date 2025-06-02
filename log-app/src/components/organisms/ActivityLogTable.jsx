import React from 'react';
import {Table} from '@chakra-ui/react';
import {useActivityLog} from '../../hooks/useActivityLog';
import LoadingState from '../atoms/LoadingState';
import ErrorState from '../atoms/ErrorState';
import ActivityRow from "../molecules/ActivityRow.jsx";

function ActivityLogTable(props) {
    const {logs, loading, error} = useActivityLog();

    if (loading) return <LoadingState message="Loading activity log..."/>;
    if (error) return <ErrorState message={error}/>;


    return (
        <Table.Root variant="outline" showColumnBorder colorPalette="purple" style={{backgroundColor: "white"}}>
            <Table.Header>
                <Table.Row bg={"white"}>
                    <Table.ColumnHeader color={"black"} fontWeight={600}>Message</Table.ColumnHeader>
                    <Table.ColumnHeader color={"black"} fontWeight={600}>Time</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {logs.map((log, index) => (
                    <ActivityRow key={index} message={log.message} time={log.time}/>
                ))}
            </Table.Body>
        </Table.Root>
    );
}

export default ActivityLogTable;
