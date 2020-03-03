import React from "react";
import {v4 as uuid} from "uuid";

function DogList({dogs}) {

  return (
    <div>
      {dogs.map(({name, src}) =>
      <div key={uuid()}>
          <ul>
            <h3>{name}</h3>
            <img src={src} alt={`${name}-pic`} />
          </ul>
        </div>)}
    </div>
  )
}

export default DogList;