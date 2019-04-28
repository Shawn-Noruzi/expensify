import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from "./../components/AddExpense";
import EditExpensePage from "./../components/EditExpense";
import ExpenseDashboardPage from "./../components/ExpenseDashboard";
import Header from "./../components/Header";
import HelpPage from "./../components/Help";
import LoginPage from './../components/Login';
import NotFoundPage from "./../components/NotFound";

const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;