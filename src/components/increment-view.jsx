import { useState } from 'react';
import AxiosInstance from 'utils/apiServers';

const useIncrementView = () => {
    const [views, setViews] = useState(0);

    const incrementView = async (productId) => {
        try {
            const response = await AxiosInstance.post(`increment-view/${productId}`);
            setViews(response.data.product.views);
        } catch (error) {
            console.error('Error increasing views', error);
        }
    };

    return {
        views,
        incrementView,
    };
};

export default useIncrementView;
