import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Character(character) {
  //copy from stackoverflow
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div div className="col-3" style={{ padding: "1rem" }}>
      <div className="card h-100" style={{ padding: "1rem" }}>
        <CardBody>
          <CardTitle>{truncate(character.name, 20)}</CardTitle>
          <img
            src={character.image}
            alt={character.name}
            className="card-img-top"
          />
          <CardText>
            Origin : {character.origin && character.origin.name}
          </CardText>
        </CardBody>
      </div>
    </div>
  );
}

export default Character;
