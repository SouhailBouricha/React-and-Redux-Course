import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore , applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducers from './reducers';
import thunk from "redux-thunk";

const compuseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(rootReducers,  compuseEnhancer(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
