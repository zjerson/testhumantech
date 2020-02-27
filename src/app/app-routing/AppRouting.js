import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import AppSidebar from 'app/components/AppSidebar';
import AppHeader from 'app/components/AppHeader/AppHeader';

// Pages
import PageHome from 'app/pages/PageHome';
import PageMovies from 'app/pages/PageMovies';
import PageShifts from 'app/pages/PageShifts';
import PageAdministrators from 'app/pages/PageAdministrators';
import PageProfile from 'app/pages/PageProfile';


const AppRouting = () => {
    return (
        <Router>
            <div className='h-full w-full flex flex-col'>
                <AppHeader />
                <div className='flex-grow flex'>
                    <AppSidebar />
                    <div className='flex-grow bg-gray-100'>
                        <Switch>
                            <Route exact path='/'>
                                <PageHome />
                            </Route>
                            <Route path='/movies'>
                                <PageMovies />
                            </Route>
                            <Route path='/shifts'>
                                <PageShifts />
                            </Route>
                            <Route path='/administrators'>
                                <PageAdministrators />
                            </Route>
                            <Route path='/profile'>
                                <PageProfile />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
};

export default AppRouting;