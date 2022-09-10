import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer/rootReducer';
import thunk from 'redux-thunk';
import {legacy_createStore as createStore, applyMiddleware,compose} from 'redux'

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>
);
