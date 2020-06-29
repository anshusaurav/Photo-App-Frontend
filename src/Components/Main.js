import React from 'react';
import ExplorePage from './ExplorePage'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfilePage from './ProfilePage';
import UploadForm from './UploadForm';
import HomePage from './HomePage'
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

class Main extends React.Component{

        render(){
            return (
            <Router>
                <Switch>
                    <Route path='/login'>
                    <LoginForm/>
                    </Route>
                    <Route path='/signup'>
                        <SignupForm/>
                    </Route>
                    <Route path='/explore'>
                        <ExplorePage/>
                    </Route>
                    <Router path='/profile'>
                        <ProfilePage/>
                    </Router>
                    <Router path='/upload'>
                        <UploadForm/>
                    </Router>
                    <Router path='/home'>
                        <HomePage/>
                    </Router>
                </Switch>
            </Router>
            )
        }
}
export default Main;