import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import QRCodeStyled from 'react-native-qrcode-styled';
import Button from 'ui/src/Atoms/Button/Button.mobile';
import Clipboard from '@react-native-clipboard/clipboard';
import {colors, gradientsColors} from 'ui/src/styles/const';
import TwGradientText from '../../components/Common/TwGradientText';
import TwLinearGradient from '../../components/Common/TwLinearGradient';
import TwSafeAreaView from '../../components/Common/TwSafeAreaView';
import TwText from '../../components/Common/TwText';
import TwView from '../../components/Common/TwView';
import {LetterStackParamList} from '../../navigation/LetterNavigator/LetterNavigator';
import useToastHelper from '../../hooks/useToastHelper';
import TwScrollView from '../../components/Common/TwScrollView';

type ScreenProps = NativeStackScreenProps<
  LetterStackParamList,
  'LetterShareScreen'
>;

const LetterShareScreen = ({route, navigation}: ScreenProps) => {
  const {showToast} = useToastHelper();
  const clipToCopy = useCallback(() => {
    const link = route.params.shortLink || '';
    Clipboard.setString(`https://www.chit-tal.com/${link}`);
    showToast('Copy to clipboard');
  }, [route.params.shortLink, showToast]);

  return (
    <TwLinearGradient className="flex-1" colors={gradientsColors.firstPattern}>
      <TwSafeAreaView className="flex-1">
        <TwScrollView className="flex-1 px-5">
          <TwText className="font-mm text-white text-center text-xl mt-5">
            ချစ်တဲ့အကြောင်းတွေ Share မယ်
          </TwText>

          <TwView className="mt-5 bg-white rounded-lg flex justify-center items-center">
            <TwView className="">
              <QRCodeStyled
                data={route.params.shortLink}
                padding={25}
                pieceSize={9}
                pieceBorderRadius={5}
                color={colors.btnBlack}
                outerEyesOptions={{
                  topLeft: {
                    borderRadius: [20, 20, 20, 20],
                  },
                  topRight: {
                    borderRadius: [20, 20, 20, 20],
                  },
                  bottomLeft: {
                    borderRadius: [20, 20, 20, 20],
                  },
                }}
                innerEyesOptions={{
                  borderRadius: 12,
                  scale: 0.85,
                }}
                // @ts-ignore
                errorCorrectionLevel="Q"
              />

              <TwGradientText
                cls="text-center font-bold text-2xl mb-3"
                text="Chit Tal"
              />
            </TwView>
          </TwView>

          <Button
            variant="dark"
            title="Copy Link"
            className="mt-4"
            onPress={clipToCopy}
          />

          <TwView
            className="bg-black mt-2 px-6 py-7 rounded-lg"
            style={{backgroundColor: 'rgba(0,0,0, 0.25)'}}>
            <TwText className="font-mm leading-6 text-white text-center">
              အခု link ​လေးကို copy လုပ်ပြီး သင်​ရေးထားတာကို
              ဖတ်​စေချင်တဲ့သူကိုသွား​ပေးလိုက်ပါ။ ဒီစာ​လေးကို
              အချိန်မ​ရွေးပြန်ဖတ်နိုင်ဖို့အတွက်လည်းအခု link ​လေးကို
              မှတ်ထား​ပေးရန်လိုအပ်ပါသည်။
            </TwText>
          </TwView>

          <TwText className="mt-4 text-white font-mm text-center">
            🤭 လူ့ဘဝတခဏတာမှာ​ပြောချင်တာ​တွေကိုအချိန်မဆွဲပါနဲ့။
          </TwText>

          <Button
            variant="dark"
            title="Go Back"
            className="mt-4"
            onPress={() => navigation.goBack()}
          />
        </TwScrollView>
      </TwSafeAreaView>
    </TwLinearGradient>
  );
};

export default LetterShareScreen;
