import {cva} from 'class-variance-authority';

const baseStyle = 'inline-block';

export const variants = cva(baseStyle, {
  variants: {
    size: {
      md: 'h-5 w-5',
      sm: 'h-3 w-3',
      lg: 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
