import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.less';

const expenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const addExpensePage = () => (
    <div>
        This is from my add Expense component
    </div>
);

const editExpensePage = () => (
    <div>
        This is from my edit Expense component
    </div>
);

const helpExpensePage = () => (
    <div>
        This is from my help Expense component
    </div>
);

const routes = (
    <BrowserRouter>
    <div>
    <Route path="/" component={expenseDashboardPage} exact={true} />
    <Route path="/create" component={addExpensePage} />
    <Route path="/edit" component={editExpensePage} />
    <Route path="/help" component={helpExpensePage} />
    </div>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
