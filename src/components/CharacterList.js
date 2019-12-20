import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import * as Styled from '../Styled';

import SearchForm from './SearchForm';

export default function CharacterList() {

  {/* Character state for sorting through characters
  and displaying them to the DOM */}
  const [characters, setCharacter] = useState([]);

  {/* Page state to hold the current page */}
  const [page, setPage] = useState(getCharacterPage(1));

  {/* Loading state for us to display our loading animation
  when we are transitioning pages 
  -- initial state set to false
  -- when we start our useEffect it turns loading state to true
  -- after our axios call is SUCCECCFUL it switches back to false */}
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      // axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      //   .then(res => {
      //     console.log(res.data.results);
      //     const characters = res.data.results;
      //     setLoading(false);
      //     setCharacter(characters);
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }, 750)

  }, [page]);


  function getCharacterPage(pageNumber){
    return pageNumber
  }

  function nextPage(){
    page >= 25 ? setPage(25) : setPage(page + 1)
  }

  function previousPage(){
    page <= 1 ? setPage(1) : setPage(page - 1)
  }

  function firstPage(){
    setPage(1)
  }

  function lastPage(){
    setPage(25)
  }

  return (
    <div className="outterContainer">

      <div className="formContainer">
        <SearchForm 
          characters={characters} 
        />
      </div>

      <Styled.Pagination>
          <Styled.outterButtons onClick={firstPage}>1</Styled.outterButtons>
          <Styled.PageButton onClick={previousPage}>-</Styled.PageButton>
          <Styled.PageButton onClick={nextPage}>+</Styled.PageButton>
          <Styled.outterButtons onClick={lastPage}>25</Styled.outterButtons>
        </Styled.Pagination>

      <Styled.cList className="cList">
        {
          loading ||!characters.length
          ? 
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              /> 
          :
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

      <Styled.Pagination>
        <Styled.outterButtons>1</Styled.outterButtons>
        <Styled.PageButton>-</Styled.PageButton>
        <Styled.PageButton>+</Styled.PageButton>
        <Styled.outterButtons>25</Styled.outterButtons>
      </Styled.Pagination>

    </div>
  );
}
