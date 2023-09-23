import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import HomeNavigator from './HomeNavigator/HomeNavigator';
import LetterNavigator from './LetterNavigator/LetterNavigator';
import useAuth from '../hooks/useAuth';

const queryClient = new QueryClient();

const RootNavigation = () => {
  const {auth} = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {!auth && <HomeNavigator />}
        {auth && (
          <>
            <LetterNavigator />
          </>
        )}
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
};
export default RootNavigation;
