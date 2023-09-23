import React from 'react';
import {gradientsColors} from 'ui/src/styles/const';
import TwLinearGradient from '../../components/Common/TwLinearGradient';
import TwSafeAreaView from '../../components/Common/TwSafeAreaView';
import LoginForm from '../../components/Form/LoginForm';

const LoginScreen = () => {
  return (
    <TwLinearGradient className="flex-1" colors={gradientsColors.firstPattern}>
      <TwSafeAreaView className="flex-1 ">
        <LoginForm />
      </TwSafeAreaView>
    </TwLinearGradient>
  );
};
export default LoginScreen;
