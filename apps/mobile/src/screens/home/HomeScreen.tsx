import React from 'react';
import Button from 'ui/src/Atoms/Button/Button.mobile';
import DashboardWaitImage from 'ui/src/Molecules/DashboardWaitImage/DashboardWaitImage.mobile';
import DashboardLandingImage from 'ui/src/Molecules/DashboardLandingImage/DashboardLandingImage.mobile';
import TwView from '../../components/Common/TwView';
import useNavigator from '../../navigation/useNavigator';
import TwText from '../../components/Common/TwText';
import TwScrollView from '../../components/Common/TwScrollView';
import TwLinearGradient from '../../components/Common/TwLinearGradient';
import {gradientsColors} from 'ui/src/styles/const';
import TwImg from '../../components/Common/TwImg';

const imgSource = require('../../../assets/images/tiny_logo.png');

const HomeScreen = () => {
  const navigation = useNavigator();
  return (
    <TwScrollView className="bg-white">
      <TwLinearGradient colors={gradientsColors.firstPattern}>
        <TwView className="flex-row justify-center items-center mt-12">
          <TwImg source={imgSource} className="h-8 w-8 mr-2" />
          <TwText className="text-white text-2xl font-bold">Chit Tal</TwText>
          <TwView className="ml-2 px-1 bg-white font-bold rounded-md top-[2px]">
            <TwText className="text-xs">Beta</TwText>
          </TwView>
        </TwView>

        <DashboardLandingImage size={'md'} className="relative top-1" />
      </TwLinearGradient>

      <TwView className="flex-1 px-5 pt-3">
        <Button
          variant="dark"
          title="ရေးမယ်"
          className="my-3"
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
        <DashboardWaitImage size={'sm'} />
        <TwText className="font-mm text-center text-lg mt-4">
          ကျွန်​တော်တို့မှာ ကိုယ်ချစ်ရတဲ့သူ​တွေ၊ တန်ဖိုးထားရတဲ့သူ​တွေရှိကြမှာပါ။
          ကိုယ်တန်ဖိုးထားရတဲ့အ​ကြောင်း​တွေ၊ ချစ်ရတဲ့အ​ကြောင်း​တွေကို
          ကိုယ့်မိသားစုဝင်​တွေကိုပဲဖြစ်ဖြစ်၊ သူများ၏ သား သမီးကိုပဲဖြစ်ဖြစ်
          အခုပဲအချစ်စာ​​လေး​ရေးပြီး​ပြောပြလိုက်ပါ။
        </TwText>
      </TwView>
    </TwScrollView>
  );
};

export default HomeScreen;
