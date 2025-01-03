import { Transfer } from '@components/molecules';
import {
  Table,
  type GetProp,
  type TableColumnsType,
  type TableProps,
  type TransferProps,
} from 'antd';

type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];

export interface DataType {
  key: number;
  title: string;
  description: string;
  tag: string;
}

export interface TableTransferProps extends TransferProps<TransferItem> {
  dataSource: DataType[];
  leftColumns: TableColumnsType<DataType>;
  rightColumns: TableColumnsType<DataType>;
}

const mockTags = ['primary', 'red', 'orange', 'blue', 'green'];
export const mockData = Array.from({ length: 50 }).map<DataType>(
  (_, index) => ({
    key: index,
    title: `content${index + 1}`,
    description: `description${index + 1}`,
    tag: mockTags[index % 5],
  }),
);

export const TableTransfer: React.FC<TableTransferProps> = ({
  leftColumns,
  rightColumns,
  ...rest
}) => {
  return (
    <Transfer {...rest}>
      {({
        direction,
        filteredItems,
        onItemSelect,
        onItemSelectAll,
        selectedKeys: listSelectedKeys,
        disabled: listDisabled,
      }) => {
        const columns = direction === 'left' ? leftColumns : rightColumns;
        const rowSelection: TableRowSelection<TransferItem> = {
          getCheckboxProps: () => ({ disabled: listDisabled }),
          onChange(selectedRowKeys) {
            onItemSelectAll(selectedRowKeys, 'replace');
          },
          selectedRowKeys: listSelectedKeys,
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
          ],
        };

        return (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredItems}
            size="small"
            style={{ pointerEvents: listDisabled ? 'none' : undefined }}
            onRow={({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) {
                  return;
                }
                onItemSelect(key, !listSelectedKeys.includes(key));
              },
            })}
          />
        );
      }}
    </Transfer>
  );
};
