import React, { Component } from 'react';
import './Login.css'
import twitterlogo from '../twitter.svg'

export default class Login extends Component {

  state = {
    username: '',
  }

  handleInputChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { username } = this.state
    console.log(username)
    if (!username.length) return

    localStorage.setItem('@GoTwitter:username', username)
    this.props.history.push('/timeline')
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterlogo} alt="GoTwitter" />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.username} onChange={this.handleInputChange} placeholder="Nome user" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
