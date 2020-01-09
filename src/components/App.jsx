import React, { Component } from 'react';
import 'isomorphic-fetch';
import "es6-promise";
import DisplayCard from './DisplayCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmsInfo: []
    }
  }

  async componentDidMount() {
    let films = await fetch("https://ghibliapi.herokuapp.com/films");
    let filmsInfo = await films.json();
    this.setState({ filmsInfo });

  }

  render() {

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

  }

}

export default App;
