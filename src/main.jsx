import { createRoot } from 'react-dom/client';
import SettingContextProvider from './context/SettingContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
   <SettingContextProvider>
      <App />
   </SettingContextProvider>
);
