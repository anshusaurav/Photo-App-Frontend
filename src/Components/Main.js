import React from 'react';
import ExplorePage from './ExplorePage'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
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
                </Switch>
            </Router>
            )
        }
}
export default Main;