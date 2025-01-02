import {
  Button,
  Checkbox,
  Input,
  Radio,
  Section,
  Select,
} from '@components/atoms';
import { Form, FormItem } from '@components/molecules';
import { PageLayout } from '@components/organasims';
import { radioOptions, selectOptions } from './data';
import { useAlertStore } from '@stores';
import { FormEvent, useEffect, useState } from 'react';
import { cn } from '@common/utils';

const FormPage = () => {
  const [isSmallMode, setIsSmallMode] = useState(false);
  const { show } = useAlertStore();

  const handleShow = () => {
    show({
      title: 'Form example',
      message: 'Here is form message',
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <Section>
        <Form
          onSubmit={handleSubmit}
          title="Here is form title"
          description="Here is a form description"
          gap={30}
        >
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="Name"
            tooltipTitle="Here is tooltip title"
            extra="Here is extra description"
            required
          >
            <Input placeholder="placeholder" />
          </FormItem>
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="Name"
            tooltipTitle="Here is tooltip title"
            extra="Here is extra description"
            required
          >
            <Input
              placeholder="placeholder"
              addonBefore="https://"
              addonAfter=".com"
            />
          </FormItem>
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="Name"
            tooltipTitle="Here is tooltip title"
            extra="Here is extra description"
            required
          >
            <Select
              style={{ width: '100%' }}
              options={selectOptions}
              defaultValue={selectOptions[0].value}
            />
          </FormItem>
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="Name"
            tooltipTitle="Here is tooltip title"
            extra="Here is extra description"
            required
          >
            <Select
              style={{ width: '100%' }}
              options={selectOptions}
              defaultValue={selectOptions}
              mode="multiple"
            />
          </FormItem>
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="Name"
            tooltipTitle="Here is tooltip title"
            extra="Here is extra description"
            required
          >
            <Radio.Group
              className={cn('flex flex-col xs:flex-row gap-2')}
              defaultValue={selectOptions[0].value}
              options={radioOptions}
            />
          </FormItem>
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="Name"
            tooltipTitle="Here is tooltip title"
            extra="Here is extra description"
            required
          >
            <Checkbox.Group
              className={cn('flex flex-col xs:flex-row gap-2')}
              defaultValue={[selectOptions[0].value]}
              options={radioOptions}
            />
          </FormItem>
          <FormItem
            direction={isSmallMode ? 'vertical' : 'horizontal'}
            label="Name"
            tooltipTitle="Here is tooltip title"
            extra="Here is extra description"
            required
          >
            <Input.TextArea
              style={{ minHeight: 100 }}
              placeholder="placeholder"
            />
          </FormItem>
          <div className="flex flex-row-reverse max-w-[640px] gap-4">
            <Button onClick={handleShow}>Submit</Button>
            <Button buttonStyle="outline">Cancle</Button>
          </div>
        </Form>
      </Section>
    </PageLayout>
  );
};

export default FormPage;
