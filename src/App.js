import List from './components/List';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

const App = () => {

  return (
    <div className="App my-3">
      <Container className='mt-5 pt-5'>
        <Header type='app' />
        <List fav={false} />
      </Container>
    </div>
  );
}

export default App;
