import React from 'react';

const DisplayPeopleCard = (props) => {

  return (  // No fragment needed here since <div> is used.

      <div className="py-1" key={props.people.id}>
        <div className="card">

          <div className="card-body shadow">
            <h4 className="card-title">{props.people.name}</h4>
            <p className="body-text">Gender: {props.people.gender}</p>
            <p className="body-text">Age: {props.people.age}</p>
            <p className="body-text">Link: <a href={props.people.url} target="_blank" rel="noopener noreferrer">{props.people.url}</a></p>
          </div>

        </div>
      </div>

  )

}

export default DisplayPeopleCard;
