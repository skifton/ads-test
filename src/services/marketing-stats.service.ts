import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = 'https://www.blockchain.com/ticker';

const getMarketingStats = async () => {
  return axios.get(url).then((response) => response.data);
};

const useGetMarketingStats = () => {
  const { isLoading, error, data: marketingStats } = useQuery(['marketingStats'], () => getMarketingStats());

  return {
    isLoading,
    error,
    marketingStats,
  };
};

export { useGetMarketingStats };
