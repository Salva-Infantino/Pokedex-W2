import { useEffect, useState } from 'react';
import { useMyContext } from '../utils/MyContext';
import { Row, Col, Spinner } from 'react-bootstrap';
import Card from './Card';

const List = ({fav}) => {

    const { input, search, favorites, pokemonList, isLoading } = useMyContext();

    const [List, setList] = useState([]);

    useEffect(() => {
        setList(pokemonList);
    }, [pokemonList])

    useEffect(() => {
        if (input.length > 0) {
            const filtered = pokemonList.filter(pokemon => pokemon.Name.toLowerCase().includes(input.toLowerCase()));
            setList(filtered);
        } else {
            setList(pokemonList);
        }
    }, [input, pokemonList])

    useEffect(() => {
        !search && setList(pokemonList);
    }, [search, pokemonList])

    return (
        <Row>
            {
                isLoading ? <div className='d-flex justify-content-center align-items-center'><Spinner animation="border" variant="secondary" /></div> :
                fav ?
                    favorites.length === 0 ? <p className='text-secondary text-center'>No favorites</p> :
                    List.map(pokemon => {
                        let item;
                        if (favorites.includes(pokemon.Id)) {
                        item =  <Col key={pokemon.Id} xs={12} className='mb-3'>
                            <Card pokemon={pokemon} />
                        </Col>
                        }
                        return item;
                    }) : 
                List.length === 0 ? <p className='text-secondary text-center'>No result</p> :
                List.map(pokemon => {
                    return <Col key={pokemon.Id} xs={12} className='mb-3'>
                        <Card pokemon={pokemon} />
                    </Col>
                })
            }
        </Row>
    )
}

export default List;