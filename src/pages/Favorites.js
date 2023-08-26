import Header from '../components/Header';
import List from '../components/List';
import { Container } from 'react-bootstrap';

const Favorites = () => {

    return (
        <Container className='mt-5 pt-5'>
            <Header type='favorites' />
            <List fav={true} />
        </Container>
    )
}

export default Favorites;