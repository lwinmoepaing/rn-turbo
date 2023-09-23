import { Control, Controller, FieldError } from "react-hook-form";
import Input from "ui/src/Atoms/Input/Input.web";

interface FormControlInputProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  defaultValue?: string;
  control: Control<any>;
  error: FieldError | undefined;
  type?: string;
}
const FormControlInput = ({
  control,
  name,
  defaultValue,
  error,
  type,
  ...rest
}: FormControlInputProps) => {
  return (
    <>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChange={(changeText) => {
              onChange(changeText);
            }}
            type={type}
            {...rest}
          />
        )}
      />
      {!!error && (
        <span className="mt-1.5 text-rose-500 text-sm">{error.message}</span>
      )}
    </>
  );
};
export default FormControlInput;
