import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from './shared/components/MainLayout';
import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';
import ForgotPasswordScreen from './auth/ForgotPasswordScreen';
import ResetEmailSentScreen from './auth/ResetEmailSentScreen';
import ResetPasswordScreen from './auth/ResetPasswordScreen';
import NotFoundScreen from './shared/components/NotFoundScreen';

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
  userIsAdminRedir,
} from './auth';

const RouterComponent = () =>
  <Switch>
    <Route exact path='/login' component={userIsNotAuthenticatedRedir(LoginScreen)} />
    <Route exact path='/signup' component={userIsNotAuthenticatedRedir(SignupScreen)} />
    <Route exact path='/forgot-password' component={userIsNotAuthenticatedRedir(ForgotPasswordScreen)} />
    <Route exact path='/forgot-password/sent' component={userIsNotAuthenticatedRedir(ResetEmailSentScreen)} />
    <Route exact path='/reset-password' component={userIsNotAuthenticatedRedir(ResetPasswordScreen)} />
    <Route path="/" component={userIsAuthenticatedRedir(MainLayout)} />
    <Route path="/" component={NotFoundScreen} />
  </Switch>;

export default RouterComponent;
