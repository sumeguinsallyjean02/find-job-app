import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Components/Main';
import store from './Redux/store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <Provider store={store}>
        <Main></Main>
    </Provider>
)