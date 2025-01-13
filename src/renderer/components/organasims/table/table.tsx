import { cn } from '@common/utils';
import { Table as TableAntd, TableProps as TableAntdProps } from 'antd';

export interface TableProps<RecordType = any> extends TableAntdProps {}

export const Table = ({ className, ...rest }: TableProps) => {
  return <TableAntd className={cn(className)} {...rest} />;
};
