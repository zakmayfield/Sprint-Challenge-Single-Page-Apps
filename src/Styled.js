import styled from 'styled-components';



//=====CharacterList=====

export const cList = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const cCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;

  border: 1px solid black;

  padding: 3vh 1vw;
  margin: 1vh 1vw;

  width: 300px;
`;

export const cImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const cName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const cSpecies = styled.p`
  font-style: italic;
`;

export const cOrigin = styled.p`

`;




//=====Header=====

export const nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const NavLink = styled.a`

`;