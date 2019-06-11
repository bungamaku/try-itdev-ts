import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Discover from 'pages/discover';
import NavBar from 'components/navbar';

export default function Page() {
    return(
        <>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Discover} />
            </Switch>
        </>
    );
}