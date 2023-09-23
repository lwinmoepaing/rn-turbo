'use client';
import {VariantProps} from 'class-variance-authority';
import {FC} from 'react';
import {cn} from '../../../utils/utils';
import {variants} from './HamburgerIcon.style';

export interface HamburgerIconWebProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
    VariantProps<typeof variants> {
  disabled?: boolean;
}

const HamburgerIcon: FC<HamburgerIconWebProps> = ({
  className,
  size,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    aria-hidden="true"
    viewBox="0 0 20 20"
    className={cn(variants({size}), className)}
    {...rest}>
    <path
      fillRule="evenodd"
      stroke="none"
      d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default HamburgerIcon;
