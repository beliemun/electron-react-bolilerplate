import { Divider, Section } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { BasicDrawer, InnerDrawer } from './components';

const DrawerPage = () => {
  return (
    <PageLayout title="<Drawer />">
      <Divider orientation="left">Basic Drawer</Divider>
      <Section className="pt-2">
        <BasicDrawer />
      </Section>
      <Divider orientation="left">Inner Drawer</Divider>
      <Section className="pt-2">
        <InnerDrawer />
      </Section>
    </PageLayout>
  );
};

export default DrawerPage;
