import React from "react";
import { useParams } from "react-router-dom";
import {v4 as uuid} from "uuid";

function DogDetails({dogs}) {

  const {name} = useParams();
  const matchedDog = dogs.filter(d => d.name === name)[0];

  return (
     <div>
      <h3>{matchedDog.name}</h3>
      <img src={matchedDog.src} alt={`${matchedDog.name}-pic`} />
      <ul>
        {matchedDog.facts.map(f => <li key={uuid()}>{f}</li>)}
      </ul>
    </div>
  )
}

export default DogDetails;