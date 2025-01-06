import { Card, Section, Text } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const TextPage = () => {
  return (
    <PageLayout title="<Text />">
      <Section>
        <Card title={'sm(24px)'}>
          <div className="flex flex-col">
            <Text type="sm-light">sm-light</Text>
            <Text type="sm-normal">sm-normal</Text>
            <Text type="sm-semibold">sm-semibold</Text>
            <Text type="sm-bold">sm-bold</Text>
          </div>
        </Card>
        <Card title={'base(28px)'}>
          <div className="flex flex-col text-left">
            <Text type="base-light">base-light</Text>
            <Text type="base-normal">base-normal</Text>
            <Text type="base-semibold">base-semibold</Text>
            <Text type="base-bold">base-bold</Text>
          </div>
        </Card>
        <Card title={'lg(36px)'}>
          <div className="flex flex-col text-left">
            <Text type="lg-light">lg-light</Text>
            <Text type="lg-normal">lg-normal</Text>
            <Text type="lg-semibold">lg-semibold</Text>
            <Text type="lg-bold">lg-bold</Text>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default TextPage;
