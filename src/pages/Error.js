import { Container, Image } from 'react-bootstrap';
import Error1 from '../img/Error1.jpeg';
import Error2 from '../img/Error2.webp';
import Error3 from '../img/Error3.jpeg';

const Error = () => {

    const imageError = [Error1, Error2, Error3];
    const roundedNumber = Math.floor(Math.random() * imageError.length);
    console.log(roundedNumber);

    return (
        <Container className='mt-5 pt-5'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='fs-1'>ERROR 404</div>
                <Image src={imageError[roundedNumber]} alt="Error" className='w-75 my-5' />
                <a href="/" className='btn btn-secondary' role='button'>Back to Home page</a>
            </div>
        </Container>
    )
}

export default Error;