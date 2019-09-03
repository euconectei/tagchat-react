import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import Login from '../components/login/login';

class LoginPage extends Component {
  render() {
    return (
      <>
        <Container className="container-page-full d-flex align-items-center justify-content-center">
          <div className="col-lg-6">
            <Login {...this.props} />
          </div>
        </Container>
      </>
    );
  }
}

export default LoginPage;
