import React from 'react';
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import './App.css';

const App = () => {
  return (
    <>
        <Header />
        <ItemListContainer
        />
        <ItemDetailContainer/>
    </>
  );
}


export default App;
