import { Button, Divider, Message, Section, Space } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const MessagePage = () => {
  const [messageApi, contextHolder] = Message.useMessage();
  const handleInfo = () => messageApi.info('Hello, this is an info message.');
  const handleSuccess = () =>
    messageApi.success('Hello, this is a success message.');
  const handleWarning = () =>
    messageApi.warning('Hello, this is a warning message.');
  const handleError = () =>
    messageApi.error('Hello, this is an error message.');

  const key = 'updatable';
  const hadnleLoading = () => {
    messageApi.open({ key, type: 'loading', content: 'Loading...' });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <PageLayout title="<Message />">
      <Divider orientation="left">Variants</Divider>
      {contextHolder}
      <Section>
        <Space direction="horizontal" gap={16}>
          <Button skipAnimation onClick={handleInfo} buttonColor="cyan">
            Info
          </Button>
          <Button skipAnimation onClick={handleSuccess} buttonColor="green">
            Success
          </Button>
          <Button skipAnimation onClick={handleWarning} buttonColor="yellow">
            Warning
          </Button>
          <Button skipAnimation onClick={handleError} buttonColor="red">
            Error
          </Button>
        </Space>
      </Section>
      <Divider orientation="left">Loading Message</Divider>
      <Section>
        <Button skipAnimation onClick={hadnleLoading} buttonColor="primary">
          Loading
        </Button>
      </Section>
    </PageLayout>
  );
};

export default MessagePage;
