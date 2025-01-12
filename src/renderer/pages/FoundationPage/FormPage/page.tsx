import {
  Button,
  Checkbox,
  Input,
  Message,
  Radio,
  Section,
  Select,
} from '@components/atoms';
import { Form, FormItem } from '@components/molecules';
import { PageLayout } from '@components/organasims';
import {
  checkboxOptions,
  multiSelectOptions,
  radioOptions,
  singleSelectOptions,
} from './data';
import { useEffect, useState } from 'react';
import { cn } from '@common/utils';
import { Controller, useForm } from 'react-hook-form';

interface FakeFormData {
  name: string;
  id: string;
  team: string;
  duty: string[];
  place: string;
  request: string[];
  introduction: string;
}

const MESSAGE_SUBMIT = 'message_submit';

const FormPage = () => {
  const [isSmallMode, setIsSmallMode] = useState(false);
  const [messageApi, contextHolder] = Message.useMessage();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FakeFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '브라이언',
      id: 'brian',
      team: String(singleSelectOptions[1].value),
      duty: [
        String(multiSelectOptions[0].value),
        String(multiSelectOptions[2].value),
      ],
      place: (radioOptions[2] as any).value,
      request: [checkboxOptions[0], checkboxOptions[1]],
    },
  });

  const sumbit = (data: FakeFormData) => {
    messageApi.loading({
      content: '제출 중..',
      key: MESSAGE_SUBMIT,
    });

    setTimeout(() => {
      messageApi.success({ content: '제출 완료!', key: MESSAGE_SUBMIT });
      console.log('onSubmit', data);
    }, 1500);
  };

  const onSubmit = (data: FakeFormData) => {
    sumbit(data);
  };

  useEffect(() => {
    const updateCollapsedWidth = () => {
      window.innerWidth < 600 ? setIsSmallMode(true) : setIsSmallMode(false);
    };
    window.addEventListener('resize', updateCollapsedWidth);
    updateCollapsedWidth();

    return () => window.removeEventListener('resize', updateCollapsedWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLayout title="<Form />">
      {contextHolder}
      <Section>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          title="From Component"
          description="antd 컴포넌트와 react-hook-form을 결합한 예제입니다."
          gap={30}
        >
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="이름"
            tooltipTitle="사원의 이름"
            extra="이름은 영문, 숫자, 특수 기호가 포함될 수 없습니다."
            required
          >
            <Controller
              control={control}
              name="name"
              rules={{
                required: '이름 입력은 필수입니다.',
                pattern: {
                  value: /^[가-힣]+$/,
                  message:
                    '이름은 한글만 가능하고 영문, 숫자, 특수 기호가 포함될 수 없습니다.',
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="이름"
                  errors={
                    errors.name ? [String(errors.name.message)] : undefined
                  }
                />
              )}
            />
          </FormItem>

          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="이메일"
            tooltipTitle="사원의 이메일"
            extra="사용할 이메일의 아이디를 적어주세요."
            required
          >
            <Controller
              control={control}
              name="id"
              rules={{
                required: '이메일 아이디 입력은 필수입니다.',
                pattern: {
                  value: /^(?![._])[a-zA-Z._]+(?<![._])$/,
                  message:
                    '아이디는 영문만 가능하며, 중간에 언더바(_)와 마침표(.)가 포함될 수 있습니다.',
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="이메일 아이디"
                  addonAfter="@fboeit.com"
                  errors={errors.id ? [String(errors.id.message)] : undefined}
                />
              )}
            />
          </FormItem>

          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="소속"
            tooltipTitle="사원의 소속"
            required
          >
            <Controller
              control={control}
              name="team"
              rules={{
                required: '소속 입력은 필수입니다.',
              }}
              render={({ field }) => {
                const { ref, ...rest } = field;
                return <Select {...rest} options={singleSelectOptions} />;
              }}
            />
          </FormItem>

          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="직무"
            tooltipTitle="사원의 직무"
            extra="직무는 여러개가 될 수 있습니다."
            required
          >
            <Controller
              control={control}
              name="duty"
              rules={{
                required: '직무 입력은 필수입니다.',
              }}
              render={({ field }) => {
                const { ref, ...rest } = field;
                return (
                  <Select
                    {...rest}
                    options={multiSelectOptions}
                    mode="multiple"
                  />
                );
              }}
            />
          </FormItem>

          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="근무지"
            tooltipTitle="사원의 근무지"
            required
          >
            <Controller
              control={control}
              name="place"
              rules={{
                required: '근무지 입력은 필수입니다.',
              }}
              render={({ field }) => {
                const { ref, ...rest } = field;
                return (
                  <Radio.Group
                    {...rest}
                    className={cn('flex flex-col xs:flex-row gap-2')}
                    options={radioOptions}
                  />
                );
              }}
            />
          </FormItem>

          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="요청비품"
            tooltipTitle="사원의 요청비품"
            extra="추가로 필요한 비품을 요청할 수 있습니다."
          >
            <Controller
              control={control}
              name="request"
              render={({ field }) => {
                const { ref, ...rest } = field;
                return (
                  <Checkbox.Group
                    {...rest}
                    className={cn('flex flex-col xs:flex-row gap-2')}
                    options={checkboxOptions}
                  />
                );
              }}
            />
          </FormItem>

          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="자기소개"
            tooltipTitle="사원의 자기소개"
          >
            <Controller
              control={control}
              name="introduction"
              render={({ field }) => (
                <Input.TextArea
                  {...field}
                  style={{ minHeight: 100 }}
                  placeholder="자기소개"
                />
              )}
            />
          </FormItem>

          <div className="flex flex-row-reverse max-w-[720px] gap-4">
            <Button type="submit" buttonSize="lg">
              제출
            </Button>
          </div>
        </Form>
      </Section>
    </PageLayout>
  );
};

export default FormPage;
