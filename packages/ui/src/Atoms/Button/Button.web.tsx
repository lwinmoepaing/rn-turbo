'use client';
import {VariantProps} from 'class-variance-authority';
import {FC} from 'react';
import {cn} from '../../../utils/utils';
import {variants} from './Button.style';
import CircleLoading from '../CircleLoading/CircleLoading.web';

export interface ButtonStyleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  title?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonStyleProps> = ({
  className,
  size,
  variant,
  title = 'Button',
  disabled,
  loading,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(variants({variant, size, className}))}
      {...rest}>
      {loading && <CircleLoading className="mr-2 text-primary" size={size} />}
      {title}
    </button>
  );
};

export default Button;
