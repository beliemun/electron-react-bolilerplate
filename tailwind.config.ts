import { Config } from 'tailwindcss';
import { violet } from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/renderer/**/*.{js,jsx,ts,tsx,html}', // 렌더러 프로세스 파일 경로 지정
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
      colors: {
        primary: {
          '50': violet[50],
          '100': violet[100],
          '200': violet[200],
          '300': violet[300],
          '400': violet[400],
          '500': violet[500],
          '600': violet[600],
          '700': violet[700],
          '800': violet[800],
          '900': violet[900],
          '950': violet[950],
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.scrollbar': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(30, 30, 30) white',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

export default config;
