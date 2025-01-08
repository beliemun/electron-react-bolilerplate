import { Divider, Section } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { BasicDrawer, InnerDrawer } from './components';

const DrawerPage = () => {
  return (
    <PageLayout title="<Drawer />">
      <Divider orientation="left">Basic Drawer</Divider>
      <Section>
        <BasicDrawer />
      </Section>
      <Divider orientation="left">Inner Drawer</Divider>
      <Section>
        <InnerDrawer />
      </Section>
    </PageLayout>
  );
};

export default DrawerPage;
