import React, { Component } from 'react';
import 'isomorphic-fetch';
import "es6-promise";
import Logo from "../logo.png";
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmsInfo: [],
      loaded: false,
      loadedPeople: false
    }
  }

  async componentDidMount() {  // This was commented out for Phase 3.
    // let films = await fetch("https://ghibliapi.herokuapp.com/films");
    // let filmsInfo = await films.json();
    // this.setState({ filmsInfo });
  }

  async handleButtonClickFilms() {  // The FILMS button has been clicked so set the state with all properties.
    let films = await fetch("https://ghibliapi.herokuapp.com/films");
    let filmsInfo = await films.json();
    this.setState({
      loaded: true,
      loadedPeople: false,
      filmsInfo
    });
  }

  async handleButtonClickPeople() {  // The PEOPLE button has been clicked so set the state with all properties.
    let films = await fetch("https://ghibliapi.herokuapp.com/people");
    let filmsInfo = await films.json();  // Use the same "filmsInfo" array as above.
    this.setState({
      loaded: false,
      loadedPeople: true,
      filmsInfo
    })
  }

  render() {

    let filmsButton = <button className="btn btn-primary" onClick={() => this.handleButtonClickFilms()}>Load Films!</button>
    let peopleButton = <button className="btn btn-danger" onClick={() => this.handleButtonClickPeople()}>Load People!</button>

    if (this.state.loaded) {  // If the button to load the films has been clicked, then show them.
      return (
        <>
          {peopleButton}
          <FilmCard filmInfo={this.state.filmsInfo} />
        </>
      )
    } else if (this.state.loadedPeople) {  // If the PEOPLE button has been clicked, then show people.
      return (
        <>
          {filmsButton}
          <PeopleCard peopleInfo={this.state.filmsInfo} />
        </>
      )

    } else {
      return (
        <>
          <p><img src={Logo} alt="logo" /></p>
          <main className="container">
            {filmsButton}
            {peopleButton}
          </main>
        </>
      )
    }
  }

}

export default App;
