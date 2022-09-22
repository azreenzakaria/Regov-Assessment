import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import MasterLayout from "./layouts/users/MasterLayout";
import Home from "./components/frontend/Home";
import Register from "./components/frontend/auth/Register";
import Login from "./components/frontend/auth/Login";

import axios from "axios";
import Dashboard from "./components/users/Dashboard";
import Profile from "./components/users/Profile";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* <Route path="/users" name="Users" render={(props) => <MasterLayout {...props} />} /> */}

          <Route exact path="/" component={Home} />

          <Route path="/users/profile" component={Profile} />
          <Route path="/users/dashboard" component={Dashboard} />

          <Route exact path="/login">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path="/register">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
