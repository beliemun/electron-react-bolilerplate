import { create } from 'zustand';
import { AlertProps, AlertStore } from './types';

const initialData: AlertProps = {
  visible: false,
  title: undefined,
  message: undefined,
  contents: undefined,
  actions: [{ lable: 'Close', style: 'solid' }],
  footerDirection: 'right',
  footerFitable: false,
  loading: false,
  size: 480,
};

const useAlertStore = create<AlertStore>((set) => ({
  ...initialData,
  show: ({ title, message, ...rest }) => set({ visible: true, title, message, ...rest }),
  onDismiss: () => set({ ...initialData }),
}));

export default useAlertStore;
