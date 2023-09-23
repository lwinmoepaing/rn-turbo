import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import {VariantProps} from 'class-variance-authority';
import {FC, useMemo} from 'react';
import {cn} from '../../../utils/utils';
import {variants} from './Button.style';

import {styled} from 'nativewind';
import CircleLoading from '../CircleLoading/CircleLoading.mobile';

const Container = styled(View);

export interface ButtonStyleProps
  extends TouchableOpacityProps,
    VariantProps<typeof variants> {
  className?: string;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonStyleProps> = ({
  variant,
  size,
  title = 'Button',
  loading,
  onPress,
  ...rest
}) => {
  const textDynamicStyle = useMemo(() => {
    if (variant) {
      return textStyles[variant];
    }
    return textStyles.default;
  }, [variant]);

  return (
    <TouchableOpacity {...rest} onPress={onPress}>
      <Container className={cn(variants({variant, size}))}>
        {loading && <CircleLoading className="mr-2 text-primary" size={size} />}
        <Text style={textDynamicStyle}>{title}</Text>
      </Container>
    </TouchableOpacity>
  );
};

const textStyles = StyleSheet.create({
  default: {
    color: '#FFF',
  },
  outlined: {
    color: '#777',
  },
  dark: {
    color: '#fff',
  },
});

export default Button;
