import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };
    console.log(newUser);

    axios.post('https://exerapi.herokuapp.com/users/add', newUser)
    .then(res => console.log(res.data));
    
    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Crear usuario</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Usuario: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
