import React from "react";
import { Link } from "react-router-dom";
import {v4 as uuid} from "uuid"

function Nav({dogs}) {
  return (
    <ul>
      {dogs.map(d => <li key={uuid()}><Link to={`/dogs/${d.name}`}>{d.name}</Link></li>)}
    </ul>
  );
}


export default Nav;