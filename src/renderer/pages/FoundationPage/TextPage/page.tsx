import { Card, Section, Text } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const TextPage = () => {
  return (
    <PageLayout title="<Text />">
      <Section>
        <Card title={'xs'} className="w-60">
          <div className="flex flex-col">
            <Text type="xs-light">xs-light</Text>
            <Text type="xs-normal">xs-normal</Text>
            <Text type="xs-regular">xs-regular</Text>
            <Text type="xs-semibold">xs-semibold</Text>
            <Text type="xs-bold">xs-bold</Text>
          </div>
        </Card>
        <Card title={'sm'} className="w-60">
          <div className="flex flex-col">
            <Text type="sm-light">sm-light</Text>
            <Text type="sm-normal">sm-normal</Text>
            <Text type="sm-regular">sm-regular</Text>
            <Text type="sm-semibold">sm-semibold</Text>
            <Text type="sm-bold">sm-bold</Text>
          </div>
        </Card>
        <Card title={'base'} className="w-60">
          <div className="flex flex-col text-left">
            <Text type="base-light">base-light</Text>
            <Text type="base-normal">base-normal</Text>
            <Text type="base-regular">base-regular</Text>
            <Text type="base-semibold">base-semibold</Text>
            <Text type="base-bold">base-bold</Text>
          </div>
        </Card>
        <Card title={'lg'} className="w-60">
          <div className="flex flex-col text-left">
            <Text type="lg-light">lg-light</Text>
            <Text type="lg-normal">lg-normal</Text>
            <Text type="lg-regular">lg-regular</Text>
            <Text type="lg-semibold">lg-semibold</Text>
            <Text type="lg-bold">lg-bold</Text>
          </div>
        </Card>
        <Card title={'xl'} className="w-60">
          <div className="flex flex-col text-left">
            <Text type="xl-light">xl-light</Text>
            <Text type="xl-normal">xl-normal</Text>
            <Text type="xl-regular">xl-regular</Text>
            <Text type="xl-semibold">xl-semibold</Text>
            <Text type="xl-bold">xl-bold</Text>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default TextPage;
