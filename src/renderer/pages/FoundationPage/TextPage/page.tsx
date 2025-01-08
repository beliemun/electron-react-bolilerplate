import { Card, Section, Text } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const TextPage = () => {
  return (
    <PageLayout title="<Text />">
      <Section>
        <Card title={'sm(18px)'}>
          <div className="flex flex-col">
            <Text type="sm-light">light</Text>
            <Text type="sm-normal">normal</Text>
            <Text type="sm-semibold">semibold</Text>
            <Text type="sm-bold">bold</Text>
          </div>
        </Card>
        <Card title={'default(24px)'}>
          <div className="flex flex-col text-left">
            <Text type="default-light">light</Text>
            <Text type="default-normal">normal</Text>
            <Text type="default-semibold">semibold</Text>
            <Text type="default-bold">bold</Text>
          </div>
        </Card>
        <Card title={'lg(30px)'}>
          <div className="flex flex-col text-left">
            <Text type="lg-light">light</Text>
            <Text type="lg-normal">normal</Text>
            <Text type="lg-semibold">semibold</Text>
            <Text type="lg-bold">bold</Text>
          </div>
        </Card>
        <Card title={'xl(36px)'}>
          <div className="flex flex-col text-left">
            <Text type="xl-light">light</Text>
            <Text type="xl-normal">normal</Text>
            <Text type="xl-semibold">semibold</Text>
            <Text type="xl-bold">bold</Text>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default TextPage;
