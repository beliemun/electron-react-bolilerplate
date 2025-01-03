import {
  AudioOutlined,
  ExclamationCircleOutlined,
  GithubOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Card,
  Input,
  Section,
  Select,
  Space,
  Tooltip,
} from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { colors } from '@styles/colors';

const selectBefore = (
  <Select
    defaultValue="http://"
    options={[
      { value: 'http://', label: 'http://' },
      { value: 'https://', label: 'https://' },
    ]}
  />
);
const selectAfter = (
  <Select
    defaultValue=".com"
    options={[
      { value: '.com', label: '.com' },
      { value: '.net', label: '.net' },
      { value: '.org', label: '.org' },
      { value: '.kr', label: '.kr' },
    ]}
  />
);

const InputPage = () => {
  return (
    <PageLayout title="<Input />">
      <Section>
        <Card title={'Size'}>
          <Space direction="vertical" size={16}>
            <Input placeholder="small" size="small" autoFocus />
            <Input placeholder="middle" size="middle" />
            <Input placeholder="large" size="large" />
            <Input placeholder="middle disabled" size="middle" disabled />
          </Space>
        </Card>
        <Card title={'Variants'}>
          <Space direction="vertical" size={16}>
            <Input placeholder="outlined" variant="outlined" />
            <Input placeholder="filled" variant="filled" />
            <Input placeholder="borderless" variant="borderless" />
            <Input
              placeholder="borderless disabled"
              variant="borderless"
              disabled
            />
          </Space>
        </Card>
        <Card title={'Addon'}>
          <Space direction="vertical" size={16}>
            <Input placeholder="google" addonBefore="https://" suffix=".com" />
            <Input
              placeholder="google"
              addonBefore="https://"
              addonAfter=".com"
            />
            <Input
              placeholder="google"
              addonBefore={selectBefore}
              addonAfter={selectAfter}
            />
            <Input
              placeholder="https://google.com"
              addonAfter={<SettingOutlined />}
            />
          </Space>
        </Card>
        <Card title={'Search'}>
          <Space direction="vertical" size={16}>
            <Input.Search placeholder="seach" allowClear />
            <Input.Search placeholder="loading" loading />
            <Input.Search placeholder="loading" enterButton />
            <Input.Search
              addonBefore="https://"
              placeholder="google"
              suffix={
                <AudioOutlined
                  style={{ color: colors.primary[500], fontSize: 16 }}
                />
              }
              enterButton
              loading
            />
          </Space>
        </Card>
        <Card title={'Tooltip'}>
          <Space direction="vertical" size={16}>
            <Input
              placeholder="username"
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title="Enter your username.">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
            <Input
              placeholder="email"
              prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title="Enter your email.">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
            <Input
              placeholder="github"
              prefix={<GithubOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title="Enter your github id.">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
            <Input
              placeholder="country"
              prefix={<GlobalOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title="Enter your country.">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Space>
        </Card>
        <Card title={'Password'}>
          <Space direction="vertical" size={16}>
            <Input.Password placeholder="password" />
            <Input.Password value={1234567890} />
            <Input.Password value={1234567890} status="warning" />
            <Input.Password
              prefix={<ExclamationCircleOutlined />}
              value={1234567890}
              status="error"
            />
          </Space>
        </Card>
        <Card title={'TextArea'} className="max-w-xl w-full">
          <Space direction="vertical" size={16} className="w-full">
            <Input.TextArea
              placeholder="max length is 20"
              style={{ height: 100 }}
              maxLength={20}
            />
            <Input.TextArea
              placeholder="auto resize textarea"
              maxLength={20}
              autoSize
            />
          </Space>
        </Card>
        <Card title={'Verification Code'}>
          <Space direction="vertical" size={16} className="w-60">
            <Input.OTP style={{ width: '100%' }} />
            <Input.OTP style={{ width: '100%' }} variant="filled" />
            <Input.OTP style={{ width: '100%' }} mask="✕" />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default InputPage;
