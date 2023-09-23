'use client';
import {VariantProps} from 'class-variance-authority';
import {FC} from 'react';
import {cn} from '../../../utils/utils';
import {variants} from './CircleLoading.style';
import {motion} from 'framer-motion';

export interface CircleLoadingStyleProps
  extends React.HTMLAttributes<SVGElement>,
    VariantProps<typeof variants> {
  disabled?: boolean;
}

const CircleLoading: FC<CircleLoadingStyleProps> = ({
  className,
  size,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={cn(variants({size}), className)}
      initial={{rotate: '0deg'}}
      animate={{rotate: '360deg'}}
      viewBox="0 0 24 24"
      transition={{
        duration: 1.5,

        ease: 'linear',
        repeat: Infinity,
      }}>
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
        className="opacity-25"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        className="opacity-75"
      />
    </motion.svg>
  );
};

export default CircleLoading;