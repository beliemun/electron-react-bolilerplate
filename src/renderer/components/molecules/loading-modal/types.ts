export type ModalSize = 480 | 640 | 720 | 1024;

export interface LoadingModalProps {
  size?: ModalSize | undefined;
  loadingMessage?: string | undefined;
  loading?: boolean | undefined;
  onClose?: () => void | undefined;
}
