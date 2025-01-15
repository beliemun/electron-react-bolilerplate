import { create } from 'zustand';
import { DarkModeProps, DarkModeStore } from './types';

const initialData: DarkModeProps = {
  isDarkMode: false,
};

const useDarkModeStore = create<DarkModeStore>((set) => ({
  ...initialData,
  setDarkMode: (isDarkMode: boolean) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ isDarkMode });
  },
}));

export default useDarkModeStore;
