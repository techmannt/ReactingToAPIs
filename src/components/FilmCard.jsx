import React from 'react';
import DisplayFilmCard from './DisplayFilmCard';

const FilmCard = (props) => {
  return (
    <main className="container">
      {props.filmInfo.map(film => {
        return (  // No fragment needed here since <div> is used.

          <div className="py-1" key={film.id}>
            <DisplayFilmCard films={film} />
          </div>

        )
      })}
    </main>
  )
}

export default FilmCard;
