import { create } from 'zustand';

interface ButtonControlStore {
  isAnimating: boolean;
  setAnimating: (value: boolean) => void;
}

const useButtonControlStore = create<ButtonControlStore>((set) => ({
  isAnimating: false,
  setAnimating: (value) => set({ isAnimating: value }),
}));

export default useButtonControlStore;
