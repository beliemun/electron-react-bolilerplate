import { Card, Section, Title } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const TitlePage = () => {
  return (
    <PageLayout title="<Title />">
      <Section className="flex flex-col">
        <Card title={'h1(72px)'}>
          <div className="flex flex-col">
            <Title type="h1-normal">h1-normal</Title>
            <Title type="h1-semibold">h1-semibold</Title>
            <Title type="h1-bold">h1-bold</Title>
          </div>
        </Card>
        <Card title={'h2(60px)'}>
          <div className="flex flex-col">
            <Title type="h2-normal">h2-normal</Title>
            <Title type="h2-semibold">h2-semibold</Title>
            <Title type="h2-bold">h2-bold</Title>
          </div>
        </Card>
        <Card title={'h3(48px)'}>
          <div className="flex flex-col">
            <Title type="h3-normal">h3-normal</Title>
            <Title type="h3-semibold">h3-semibold</Title>
            <Title type="h3-bold">h3-bold</Title>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default TitlePage;
