import React, { Component } from 'react';
import 'isomorphic-fetch';
import "es6-promise";
import DisplayCard from './DisplayCard';
import Logo from "../logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmsInfo: [],
      loaded: false
    }
  }

  async componentDidMount() {
    let films = await fetch("https://ghibliapi.herokuapp.com/films");
    let filmsInfo = await films.json();
    this.setState({ filmsInfo });

  }

  handleButtonClick() {  // The button has been click so set the "loaded" property in this.state.
    this.setState({ loaded: true });
  }

  render() {
    if (this.state.loaded) {  // If the button to load the films has been clicked, then show them.
      return (
        <>
          <main className="container">
            {this.state.filmsInfo.map(film => {
              return (

                <div className="py-1" key={film.id}>
                  <DisplayCard films={film} />
                </div>

              )
            })}
          </main>
        </>
      )
    } else {
      return (
        <>
          <p><img src={Logo} alt="logo" /></p>
          <main className="container">
            <p><button id="submit" className="btn btn-primary" onClick={(event) => this.handleButtonClick(event)}>Load Films!</button></p>
          </main>
        </>
      )
    }
  }

}

export default App;
