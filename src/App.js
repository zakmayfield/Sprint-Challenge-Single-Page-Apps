import React from "react";
import { Route, Switch } from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />

      <Switch>
        <Route path="/characters">
          <CharacterList />
        </Route>

        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
