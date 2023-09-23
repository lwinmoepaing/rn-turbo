import {cva} from 'class-variance-authority';

const baseStyle = '';

export const variants = cva(baseStyle, {
  variants: {
    size: {
      default: 'h-8',
      sm: 'h-6',
      lg: 'h-12',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
