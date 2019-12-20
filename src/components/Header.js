import React from "react";
import {NavLink} from 'react-router-dom';

import * as Styled from '../Styled';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Styled.nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </Styled.nav>
    </header>
  );
}
