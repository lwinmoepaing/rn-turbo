import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LetterRouteScreens} from './LetterRoutes';
import LetterCreateScreen from '../../screens/letter/LetterCreateScreen';
import LetterShareScreen from '../../screens/letter/LetterShareScreen';

export type LetterStackParamList = {
  LetterCreateScreen: undefined;
  LetterShareScreen: {shortLink?: string};
};

const Stack = createNativeStackNavigator<LetterStackParamList>();

const LetterNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LetterCreateScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'LetterCreateScreen'}
        component={LetterCreateScreen}
      />
      <Stack.Screen
        name={'LetterShareScreen'}
        component={LetterShareScreen}
      />
    </Stack.Navigator>
  );
};

export default LetterNavigator;
