import '@styles/font.css';
import '@styles/tailwind.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import AntdProvider from '@libs/antd/antd-provider';
import { Alert } from '@components/molecules';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <AntdProvider>
    <App />
    <Alert />
  </AntdProvider>,
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
