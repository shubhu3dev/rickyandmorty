import React, { useEffect, useState } from "react";
import Character from "./Character";
import Axios from "axios";

function List() {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const { data } = await Axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    console.table(data.results);
    setCharacters(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      {loading ? (
        <div>Loading...</div>
      ) : (
        characters.map((character) => {
          return (
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image}
            />
          );
        })
      )}
    </div>
  );
}

export default List;
