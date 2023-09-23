import {cva} from 'class-variance-authority';

const baseStyle = '';

export const variants = cva(baseStyle, {
  variants: {
    size: {
      sm: 'h-[140px]',
      md: 'h-[260px]',
      lg: 'h-[320px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
