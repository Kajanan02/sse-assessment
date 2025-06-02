import {useSelector} from 'react-redux';

export const useDashboardData = () => {
    const activity = useSelector((state) => state.dashboardData.activity);
    const roles = useSelector((state) => state.dashboardData.roles);
    const authMethods = useSelector((state) => state.dashboardData.authMethods);
    const loading = useSelector((state) => state.dashboardData.loading);
    const error = useSelector((state) => state.dashboardData.error);

    return {activity, roles, authMethods, loading, error};
};
