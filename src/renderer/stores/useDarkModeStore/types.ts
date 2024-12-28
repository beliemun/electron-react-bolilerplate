export interface DarkModeProps {
  isDarkMode: boolean;
}

export interface DarkModeStore extends DarkModeProps {
  setDarkMode: (isDarkMode: boolean) => void;
}
