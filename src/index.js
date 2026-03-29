import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';  // it is gettinbg used to communicate between react application and the redux store
// import { store } from './slices';
import App2 from './App2';
import { store } from './RTK2/store'
import App3 from './App3';
import UserProvider from './contexts/ContextUser';
import App4 from './class-based-comp/App4';
import App5 from './App5';
// import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <App2 /> */}
      {/* <UserProvider>
        <App3 />
      </UserProvider> */}
      {/* <App4 name="Ayushi" age={20} address="Bihar"/> */}
      <App5 />
    </Provider>

  // </React. 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
