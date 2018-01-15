import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="test@gmail.com"
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
