import React from "react";

function DogList({dogs}) {

  return (
    <div>
      {dogs.map(({name, src}) =>
      <div>
          <ul>
            <h3>{name}</h3>
            <img src={src} alt={`${name}-pic`} />
          </ul>
        </div>)}
    </div>
  )
}

export default DogList;