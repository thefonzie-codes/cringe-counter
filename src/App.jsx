import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ListItem from './ListItem';

function App() {

  const council = [
    'Jared',
    'Josh',
    'John',
    'Chef',
    'Mark',
    'Joe',
  ];

  const ListItems = () => council.map((each) => <ListItem name={each}/>);

  return (
    <>
      <div className="App">
        <h1>Cringe Counter</h1>
        <ListItems/>
      </div>
    </>
  );
}

export default App;
