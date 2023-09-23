'use client';
import {VariantProps} from 'class-variance-authority';
import {FC} from 'react';
import {cn} from '../../../utils/utils';
import {variants} from './Input.style';

export interface InputWebProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {
  disabled?: boolean;
  type?: string;
  value?: string;
}

const Input: FC<InputWebProps> = ({
  className,
  size,
  variant,
  type,
  value,
  ...rest
}) => {
  return (
    <input
      type={type}
      className={cn(variants({variant, size}), className)}
      value={value}
      {...rest}
    />
  );
};

export default Input;
