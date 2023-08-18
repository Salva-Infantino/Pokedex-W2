import './scss/App.scss'
import List from './components/List';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App my-3">
      <div className='container'>
        <Header />
        <List />
      </div>
    </div>
  );
}

export default App;
