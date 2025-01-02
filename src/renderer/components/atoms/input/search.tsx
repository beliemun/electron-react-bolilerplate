import { InputRef } from 'antd';
import SearchAtnd from 'antd/es/input/Search';
import { SearchProps as SearchAntdProps } from 'antd/lib/input';
import { ForwardedRef, forwardRef } from 'react';
import { ConfigProvider } from './config-provider';
import { Text } from '../text';
import './styles.css';
import { cn } from '@common/utils';

export interface SearchProps extends SearchAntdProps {
  errors?: string[] | undefined;
}

const Search = (
  { className, size = 'middle', errors, ...rest }: SearchProps,
  ref: ForwardedRef<InputRef>,
) => {
  return (
    <ConfigProvider>
      <SearchAtnd
        ref={ref}
        className={cn(size, className)}
        size={size}
        {...rest}
      />
      <div className="flex flex-col space-y-1 mt-1 ml-1">
        {errors?.map((error, index) => (
          <Text type="sm-regular" color="red" key={index}>
            {'• ' + error}
          </Text>
        ))}
      </div>
    </ConfigProvider>
  );
};

export default forwardRef<InputRef, SearchProps>(Search);
