import {cva} from 'class-variance-authority';

const baseStyle =
  'md:text-base text-sm focus:outline-none focus:border-blue-500 focus:border-2 rounded-md w-full ';

export const variants = cva(baseStyle, {
  variants: {
    variant: {
      default: 'bg-default',
      outlined: 'border border-default',
    },
    size: {
      default: 'h-10 p-2',
      sm: 'h-6 text-xs px-2 py-1',
      lg: 'h-11 p-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
