import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <>
        <Header />
        <ItemListContainer
          initial = {1}
        />
    </>
  );
}


export default App;
