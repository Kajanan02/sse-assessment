import {useSelector} from 'react-redux';

export const useUserStats = () => {
    const stats = useSelector((state) => state.userStats?.stats || []);
    const loading = useSelector((state) => state.userStats?.loading || false);
    const error = useSelector((state) => state.userStats?.error || null);

    return {stats, loading, error};
};
