import { useSelector } from 'react-redux';
import {
  getisLoading,
  getUserName,
  getUserAvatar,
  getUserSubscription,
} from 'redux/selectors';
import defaultimage from '../../images/photo.jpg';
export const useAuth = () => {
  const loading = useSelector(getisLoading) || false;
  const name = useSelector(getUserName) || '';
  const avatar = useSelector(getUserAvatar) || defaultimage;
  const subscription = useSelector(getUserSubscription) || 'starter';
  return {
    loading,
    name,
    avatar,
    subscription,
  };
};
