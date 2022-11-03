import React from 'react';
import './App.scss';
import List from './components/BreedsList';

function App() {
  return (
    <div className="app">
      <main className="app__main">
        <List/>
      </main>
    </div>
  );
}

export default App;
