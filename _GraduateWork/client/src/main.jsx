import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './_common.scss';
import './_colors.scss';
import { createStore } from './app/store/createStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
