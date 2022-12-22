import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import RoutesMain from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store.js';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RoutesMain />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);


reportWebVitals();
