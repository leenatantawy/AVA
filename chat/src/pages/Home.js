import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import "./st.css"

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <div className="imageback">
          <section>
              <div className="jumbotron jumbotron-fluid py-5">
                    <div className="container text-center py-5">
                      <h1 className="display-4">Welcome to AVA</h1>
                      <p className="lead">Get your questions answered within seconds!</p>
                    </div>
              </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
