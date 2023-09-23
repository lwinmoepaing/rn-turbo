import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import {VariantProps} from 'class-variance-authority';
import {FC} from 'react';
import {cn} from '../../../utils/utils';
import {variants} from './Input.style';

import {styled} from 'nativewind';

const InputContainer = styled(TextInput);

export interface InputStyleProps
  extends TextInputProps,
    VariantProps<typeof variants> {
  className?: string;
}

const Input: FC<InputStyleProps> = ({variant, size, className, ...rest}) => {
  return (
    <InputContainer
      className={cn(variants({variant, size}), className)}
      {...rest}
    />
  );
};

const textStyles = StyleSheet.create({
  default: {
    color: '#FFF',
  },
  outlined: {
    color: '#777',
  },
});

export default Input;
