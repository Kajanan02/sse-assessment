import {useSelector} from 'react-redux';

export const useActivityLog = () => {
    const logs = useSelector((state) => state.activityLog.logs);
    const loading = useSelector((state) => state.activityLog.loading);
    const error = useSelector((state) => state.activityLog.error);

    return {logs, loading, error};
};
