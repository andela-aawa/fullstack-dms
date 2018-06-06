import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LandingPage from './components/LandingPage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import ManageDocumentPage from './components/documents/ManageDocumentPage';
import UsersPage from './components/users/UsersPage';
import DocumentDetailsPage from './components/documents/DocumentDetailsPage';
import ProfilePage from './components/profile/ProfilePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="document" component={ManageDocumentPage} />
    <Route path="document/:id" component={ManageDocumentPage} />
    <Route path="users" component={UsersPage} />
    <Route path="document-details/:id" component={DocumentDetailsPage} />
    <Route path="editprofile" component={ProfilePage} />
  </Route>
);
