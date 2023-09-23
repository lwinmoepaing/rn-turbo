import React from 'react';
import Button from 'ui/src/Atoms/Button/Button.mobile';
import TwSafeAreaView from '../../components/Common/TwSafeAreaView';
import TwText from '../../components/Common/TwText';
import TwView from '../../components/Common/TwView';
import useAuth from '../../hooks/useAuth';

import {gradientsColors} from 'ui/src/styles/const';
import TwLinearGradient from '../../components/Common/TwLinearGradient';
import CreateLetterForm from '../../components/Form/CreateLetterForm';

const LetterCreateScreen = () => {
  const {logOut} = useAuth();

  return (
    <TwLinearGradient className="flex-1" colors={gradientsColors.firstPattern}>
      <TwSafeAreaView className="flex-1">
        <TwView className="flex-1 px-5">
          <TwText className="font-mm text-white text-center text-xl mt-5">
            ချစ်တဲ့အကြောင်းတွေပြောမယ်
          </TwText>
          <CreateLetterForm />
          <Button variant="default" onPress={logOut} title="ထွက်မယ်" />
        </TwView>
      </TwSafeAreaView>
    </TwLinearGradient>
  );
};

export default LetterCreateScreen;
