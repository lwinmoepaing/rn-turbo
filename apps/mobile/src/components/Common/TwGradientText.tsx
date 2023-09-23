import MaskedView from '@react-native-masked-view/masked-view';
import TwLinearGradient from './TwLinearGradient';
import {gradientsColors} from 'ui/src/styles/const';
import {cn} from 'ui/utils/utils';
import TwText from './TwText';

interface TTwGradientText {
  text: string;
  cls: string;
}

const TwGradientText = ({text, cls}: TTwGradientText) => {
  return (
    <>
      <MaskedView
        maskElement={
          <TwText className={cn(cls)}>
            {text}
          </TwText>
        }>
        <TwLinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={gradientsColors.firstPattern}>
          <TwText className={cn('opacity-0 bg-transparent', cls)}>
            {text}
          </TwText>
        </TwLinearGradient>
      </MaskedView>
    </>
  );
};

export default TwGradientText;
