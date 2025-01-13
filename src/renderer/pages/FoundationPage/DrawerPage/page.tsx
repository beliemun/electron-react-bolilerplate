import { Divider } from '@components/atoms';
import { PageLayout } from '@components/tamplates';
import { BasicDrawer, InnerDrawer } from './components';
import { Section } from '@components/organasims';

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
