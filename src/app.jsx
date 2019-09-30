import './app.scss';
import { TopMenu } from 'components/core';
import PublicationsPage from 'views/PublicationsPage/PublicationsIndexPage';
import React from 'react';

const App = () => (
    <React.Fragment>
        <TopMenu title="Domicilios Test"/>
        <main className="app">
            <PublicationsPage />
        </main>
    </React.Fragment>
);

export default (App);