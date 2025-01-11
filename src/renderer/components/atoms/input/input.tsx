import {
  Input as InputAntd,
  InputProps as InputAntdProps,
  InputRef,
} from 'antd';
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { ConfigProvider } from './config-provider';
import Search, { SearchProps } from './search';
import Password, { PasswordProps } from './password';
import TextArea, { TextAreaProps } from './textarea';
import OTP, { OTPProps } from './opt';
import { OTPRef } from 'antd/es/input/OTP';
import { Text } from '../text';
import { cn } from '@common/utils';

export interface InputProps extends InputAntdProps {
  errors?: string[] | undefined;
}

export interface InputComponent
  extends ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>> {
  Search: ForwardRefExoticComponent<SearchProps & RefAttributes<InputRef>>;
  Password: ForwardRefExoticComponent<PasswordProps & RefAttributes<InputRef>>;
  TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<InputRef>>;
  OTP: ForwardRefExoticComponent<OTPProps & RefAttributes<OTPRef>>;
}

const Input = (
  { style, className, errors, autoComplete, ...rest }: InputProps,
  ref: ForwardedRef<InputRef>,
) => {
  return (
    <ConfigProvider>
      <InputAntd
        ref={ref}
        style={{ ...style }}
        className={cn(className)}
        {...rest}
      />
      <div className="flex flex-col space-y-1 mt-1 ml-1">
        {errors?.map((error, index) => (
          <Text type="sm-semibold" color="red" key={index}>
            {'• ' + error}
          </Text>
        ))}
      </div>
    </ConfigProvider>
  );
};

const InputComponent = forwardRef<InputRef, InputProps>(
  Input,
) as InputComponent;

InputComponent.Search = Search;
InputComponent.Password = Password;
InputComponent.TextArea = TextArea;
InputComponent.OTP = OTP;

export default InputComponent;
