import {useCallback} from 'react';
import authStore from '../stores/auth.store';

function useAuth() {
  const [auth, updateAuth] = authStore(state => [state.data, state.updateAuth]);

  const logOut = useCallback(() => {
    updateAuth(null);
  }, []);

  return {
    auth,
    updateAuth,
    logOut,
  };
}
export default useAuth;
