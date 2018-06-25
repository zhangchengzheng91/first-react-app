import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './ControlPanel'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(<Provider store={store}>
  <ControlPanel />
</Provider>, document.getElementById('root'));
//registerServiceWorker();
