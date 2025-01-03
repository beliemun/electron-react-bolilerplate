import { Divider, Section } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import {
  BasicTableComponent,
  FilterTableComponent,
  RowSelectionTableComponent,
} from './components';

const TablePage = () => {
  return (
    <PageLayout title="<Table />">
      <Divider orientation="left">Basic Table</Divider>
      <Section className="flex flex-col pt-2">
        <BasicTableComponent />
      </Section>
      <Divider orientation="left">Row Selection Table</Divider>
      <Section className="flex flex-col pt-2">
        <RowSelectionTableComponent />
      </Section>
      <Divider orientation="left">Filtered Table</Divider>
      <Section className="flex flex-col pt-2">
        <FilterTableComponent />
      </Section>
    </PageLayout>
  );
};

export default TablePage;
