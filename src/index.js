import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import Layout from './colors/Layout.js';

import store from './redux/store.js';

import './global.sass';

render((
    <Provider store={store}>
        <Layout />
    </Provider>
), document.getElementById('container'));