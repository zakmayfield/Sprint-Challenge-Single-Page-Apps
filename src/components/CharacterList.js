import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import * as Styled from '../Styled';

export default function CharacterList() {

  const [characters, setCharacter] = useState([]);

  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results);
        const characters = res.data.results;
        setCharacter(characters);
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <Styled.cList className="cList">
      {
          characters.map(person => {
          return (
            <Styled.cCard key={person.id} className="cCard">
              <Styled.cImage className="cImage" src={person.image} />
              <Styled.cName className="cName">{person.name}</Styled.cName>
              <Styled.cSpecies className="cSpecies">{person.species}</Styled.cSpecies>
              <Styled.cOrigin className="cOrigin">{person.origin.name}</Styled.cOrigin>
            </Styled.cCard>
          )
        })
      }
    </Styled.cList>
  );
}
