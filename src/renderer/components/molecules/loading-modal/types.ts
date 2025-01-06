export type ModalSize = 480 | 640 | 720 | 1024;

export interface LoadingModalProps {
  size?: ModalSize | undefined;
  loading?: boolean | undefined;
  message?: string | undefined;
  onClose?: () => void | undefined;
}
