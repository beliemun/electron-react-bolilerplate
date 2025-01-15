import { CSSProperties, DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Text, Tooltip } from '@components/atoms';
import { TextType } from '@components/atoms/text/types';
import { cn } from '@common/utils';
import { TooltipPlacement } from '@components/atoms/tooltip/types';

interface FormItemProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  style?: CSSProperties;
  className?: string;
  label: string;
  labelType?: TextType;
  labelWidth?: number;
  direction?: 'horizontal' | 'vertical';
  required?: boolean;
  maxWidth?: number;
  fullWidth?: boolean;
  tooltipTitle?: string;
  tooltipTrigger?: 'click' | 'focus' | 'hover';
  tooltipPlacement?: TooltipPlacement;
  extra?: string;
}

export const FormItem = ({
  style,
  className,
  htmlFor,
  label,
  labelType = 'sm-normal',
  labelWidth = 140,
  direction = 'horizontal',
  required,
  maxWidth = 720,
  fullWidth = true,
  tooltipTitle,
  tooltipTrigger = 'hover',
  tooltipPlacement = 'top',
  extra,
  children,
  ...rest
}: FormItemProps) => {
  return (
    <div
      style={{ ...style, maxWidth }}
      className={cn(
        'flex gap-2 mt-2',
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        className,
      )}
    >
      <label
        style={{ width: labelWidth }}
        className={cn('flex w-full items-center gap-1 shrink-0')}
        {...rest}
      >
        <Text type={labelType} className="overflow-label" color="description">
          {label}
        </Text>
        {required ? (
          <Text style={{ color: 'red', marginLeft: -3 }}>*</Text>
        ) : null}
        {tooltipTitle ? (
          <Tooltip
            title={tooltipTitle}
            trigger={tooltipTrigger}
            placement={tooltipPlacement}
          >
            <Text color="description">
              <QuestionCircleOutlined style={{ fontSize: 18 }} />
            </Text>
          </Tooltip>
        ) : null}
      </label>
      <div className={cn('flex flex-col gap-1', { 'w-full': fullWidth })}>
        {children}
        {extra ? (
          <Text type="sm-normal" color="disabled" className="mx-1">
            {`• ${extra}`}
          </Text>
        ) : null}
      </div>
    </div>
  );
};
