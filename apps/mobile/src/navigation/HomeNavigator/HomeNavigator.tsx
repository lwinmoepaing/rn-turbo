import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeRouteScreens} from './HomeRoutes';

export type HomeStackParamList = {
  HomeScreen: undefined;
  AboutScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const homeRoutes = Object.keys(
  HomeRouteScreens,
) as (keyof typeof HomeRouteScreens)[];

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      {homeRoutes.map(routeKey => (
        <Stack.Screen
          key={routeKey}
          name={routeKey}
          component={HomeRouteScreens[routeKey]}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
