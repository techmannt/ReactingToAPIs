import React from 'react';
import DisplayPeopleCard from './DisplayPeopleCard';

const PeopleCard = (props) => {

  return (  // No fragment needed here since <main> is used.

    <main className="container">
      {props.peopleInfo.map(person => {
        return (

          <div className="py-1" key={person.id}>
            <DisplayPeopleCard people={person} />
          </div>

        )
      })}
    </main>
  )
}

export default PeopleCard;
