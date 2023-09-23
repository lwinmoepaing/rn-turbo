import {VariantProps} from 'class-variance-authority';
import {styled} from 'nativewind';
import {FC} from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';
import {cn} from '../../../utils/utils';
import {variants} from './CircleLoading.style';
import {motifySvg} from 'moti/svg';
import {Text} from 'react-native';
import { Easing } from 'react-native-reanimated';

const TwCircle = styled(Circle);
const TwPath = styled(Path);

const MotiSVG = motifySvg(Svg)();

export interface CircleLoadingStyleProps
  extends SvgProps,
    VariantProps<typeof variants> {
  className?: string;
  title?: string;
  disabled?: boolean;
}

const CircleLoading: FC<CircleLoadingStyleProps> = ({
  size,
  title = 'CircleLoading',
  className,
  ...rest
}) => {
  return (
    <>
      <MotiSVG
        className={cn(variants({size}), className)}
        fill="none"
        viewBox="0 0 24 24"
        from={{rotate: `0deg`}}
        animate={{rotate: `360deg`}}
        transition={{
          easing: Easing.linear,
          loop: true,
          type: 'timing',
          repeatReverse: false,
          duration: 1500,
        }}
        {...rest}>
        <TwCircle
          opacity={0.1}
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={4}
        />
        <TwPath
          opacity={0.75}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </MotiSVG>
    </>
  );
};

export default CircleLoading;
