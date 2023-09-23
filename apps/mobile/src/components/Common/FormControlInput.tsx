import React from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import Input from 'ui/src/Atoms/Input/Input.mobile';
import TwText from './TwText';
import TwView from './TwView';
import {TextInputProps} from 'react-native';

interface FormControlInputProps extends TextInputProps {
  name: string;
  defaultValue?: string;
  control: Control<any>;
  error: FieldError | undefined;
}
const FormControlInput = ({
  control,
  name,
  defaultValue,
  error,
  ...rest
}: FormControlInputProps) => {
  return (
    <TwView className="mb-2">
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={changeText => {
              onChange(changeText);
            }}
            {...rest}
          />
        )}
      />
      {!!error && (
        <TwText className="mt-1.5 text-rose-500 text-sm">
          {error.message}
        </TwText>
      )}
    </TwView>
  );
};
export default FormControlInput;
