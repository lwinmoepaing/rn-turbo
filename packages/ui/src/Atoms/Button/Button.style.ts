import {cva} from 'class-variance-authority';

const baseStyle =
  'rounded-lg py-2 px-10 mb-2 flex flex-row justify-center items-center hover:opacity-90';

export const variants = cva(baseStyle, {
  variants: {
    variant: {
      default: 'text-white bg-primary',
      dark: 'text-white bg-btnBlack',
      outlined:
        'text-slate-600 bg-transparent border border-slate-200 hover:bg-white ',
    },
    size: {
      md: 'h-10 py-2 px-4',
      sm: 'h-5 px-2 rounded-md text-xs',
      lg: 'h-11 px-8 rounded-md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
