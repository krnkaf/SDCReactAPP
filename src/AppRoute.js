import Header from 'layout/Header';
import React, { Suspense, useContext, useState, useRef, useEffect } from 'react';
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";

const AboutUs = React.lazy(() => import('pages/AboutUs'));
const Dashboard = React.lazy(() => import('pages/Dashboard'));
const ContactUs = React.lazy(() => import('pages/ContactUs'));
const Post = React.lazy(() => import('pages/Post'));
const PageNotFound = React.lazy(() => import('PageNotFound'));


function AppRoute(props) {


    return (
        <>
            <Header/>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
 
                    <Route path="/aboutus" component={AboutUs} exact/>
                    <Route path="/" component={Dashboard} exact/>
                    <Route path="/contactus" component={ContactUs} exact/>
                    <Route path="/post" component={Post} exact/>
                    <Route path="/" component={PageNotFound} />

                </Switch>
            </Suspense>

            <div>
                Footer
            </div>


        </>
    );
}

export default AppRoute;