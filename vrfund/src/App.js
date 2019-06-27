import React, { Component } from "react";
import UserContainer from "./components/users/UserContainer";
import Homepage from "./components/homepage/Homepage";
import Login from './components/auth/Login';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import { Layout } from './components/Layout';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        {/* <Layout> */}
          <BrowserRouter>
          <Route exact path="/" component={Homepage} />
            <Route
              path="/users"
              render={pr => {
                if (localStorage.getItem('token')) {
                  console.log('this',localStorage);
                  return (
                    <>
                      <UserContainer />
                    </>
                  );
                }
                return <Redirect to="login" />;
              }}
            />
            <Route path="/login" component={Login} />
          </BrowserRouter>
        {/* </Layout> */}
      </Container>
      </div>
    );
  }
}

export default App;
