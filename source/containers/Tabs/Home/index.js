import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Button from 'components/Button';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import {ButtonGroup} from 'reactstrap';


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      loginModalShown: false,
      signupModalShown: false,
      text: 'anyone'
    }
    this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleSignup = this.toggleSignup.bind(this)
  }

  render() {
    const {loginModalShown, signupModalShown} = this.state;
    return (
      <div>
        <PageHeading
          title={`Welcome to my website! ${this.state.text}`}
        />

          <div className="input-group">
           <input
             type="text"
              className="form-control"
               placeholder="Username"
               value={this.state.text}
               onChange={event => this.setState({text: event.target.value})}
             />
          </div>

        <LoginModal isOpen={loginModalShown} toggle={this.toggleLogin} />
        <SignupModal isOpen={signupModalShown} toggle={this.toggleSignup} />
      </div>
    )
  }

  toggleLogin() {
    this.setState({loginModalShown: !this.state.loginModalShown})
  }

  toggleSignup() {
    this.setState({signupModalShown: !this.state.signupModalShown})
  }
}
