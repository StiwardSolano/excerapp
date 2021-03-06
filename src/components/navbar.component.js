import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Ejercicios</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Crear registro</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Nuevo Usuario</Link>
          </li>
          <li className="navbar-item">
          <Link to="/stats" className="nav-link">Top Atletas Semana</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}