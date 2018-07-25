import React, { Component } from 'react'

import validationFunc from './../../utils/formValidator'
import Input from './formFields/Input'

class SingUpForm extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      confirmEmail: '',
      userName: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  submitRegister(e) {
    e.preventDefault();
    let payload = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.userName
    }
    this.signup(payload)
  } 

  signup(payload) {
    fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        return res.json()
      })
      .then(d => {
      })
  }

  render() {
    let validObj = validationFunc(
      this.state.email,
      this.state.confirmEmail,
      this.state.userName,
      this.state.password,
      this.state.confirmPassword
    )

    return (
      <form onSubmit={this.submitRegister.bind(this)}>
      <fieldset className='App'>
        <div style={{ display: 'inline-grid' }}>
          <h2>Sign Up</h2>
          <Input
            type='text'
            data='email'
            name='Email'
            func={e => {
              this.setState({ email: e.target.value })
            }}
            valid={validObj.validMail}
          />

          <Input
            type='text'
            data='confirmEmail'
            name='Confirm Email'
            func={e => {
              this.setState({ confirmEmail: e.target.value })
            }}
            valid={validObj.validMail}
          />

          <Input
            type='text'
            data='userName'
            name='User Name'
            func={e => {
              this.setState({ userName: e.target.value })
            }}
            valid={validObj.validName}
          />

          <Input
            type='password'
            data='password'
            name='Password'
            func={e => {
              this.setState({ password: e.target.value })
            }}
            valid={validObj.validPassword}
          />
          <span>Password must be at least 8 chars long</span>
          <Input
            type='password'
            data='confirmPassword'
            name='Confirm Passwor'
            func={e => {
              this.setState({ confirmPassword: e.target.value })
            }}
            valid={validObj.validPassword}
          />
          <div>
            <input
              onChange={() => {
                this.setState({
                  agreeWithTerms: !this.state.agreeWithTerms
                })
              }}
              id='checkBox'
              type='checkbox'
            />
            <label htmlFor='checkBox'>
              I agree with the terms
            </label>
          </div>

          <input
            style={({ "display": (validObj.validMail && validObj.validName && validObj.validPassword) === true ? '' : 'none' })}
            type='submit'
            value='Create My Account'
          />
        </div>
      </fieldset>
      </form>
    )
  }
}

export default SingUpForm
