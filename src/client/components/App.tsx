import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import "../styles/index.css";

import Root from './Root';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Root}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
