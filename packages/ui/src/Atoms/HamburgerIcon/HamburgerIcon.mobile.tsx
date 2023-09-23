import Svg, {Path, SvgProps} from 'react-native-svg';

import {VariantProps} from 'class-variance-authority';
import {FC} from 'react';
import {cn} from '../../../utils/utils';
import {variants} from './HamburgerIcon.style';

export interface HamburgerIconStyleProps
  extends SvgProps,
    VariantProps<typeof variants> {
  className?: string;
}

const HamburgerIcon: FC<HamburgerIconStyleProps> = ({
  size,
  className,
  ...rest
}) => {
  return (
    <Svg
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 20 20"
      className={cn(variants({size}), className)}
      {...rest}>
      <Path
        fillRule="evenodd"
        stroke="none"
        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HamburgerIcon;
