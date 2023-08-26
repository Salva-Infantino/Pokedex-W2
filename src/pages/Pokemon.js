import Header from '../components/Header';
import About from '../components/About.js';
import BaseStats from '../components/BaseStats.js';
import Evolution from '../components/Evolution.js';
import Error from './Error';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container, Image, Spinner } from 'react-bootstrap';

import { useMyContext } from '../utils/MyContext';

const Pokemon = () => {

    const { pokemonList, isLoading } = useMyContext(); // Utiliser le hook useMyContext

    const param = useParams().pokemonId;
    const pokemon = pokemonList.find(pokemon => pokemon.Id === param);
    const nav = ['About', 'Base Stats', 'Evolution'];

    const [activeNav, setActiveNav] = useState(nav[0]);
    const [index, setIndex] = useState();

    const getImage = (id) => {
        const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
        return url + id + '.png';
    }

    const isParamValid = (param) => {
        if (isNaN(param)) {
            return false;
        } else {
            if (param.toString().length !== 3) {
                return false;
            } else {
                if (param > 0 && param < 152) {
                    return true;
                }
            }
        }
    }

    useEffect(() => {
        if (isParamValid(param)) {
            const getEvoIndex = () => {pokemon.Evolution.map((evo, i) => pokemon.Name === evo && setIndex(i))}
            getEvoIndex();
        }
    }, [pokemon, param])

    return (
        <>
        
        { !isParamValid(param) ? <Error /> :
            isLoading ? <div className='d-flex justify-content-center align-items-center'><Spinner animation="border" variant="secondary" /></div> :
            <div className={`App pokemonPage type-${pokemon.Types[0]}`}>
            <Container className='text-white topPage'>
                <Header type='pokemon' pokemon={pokemon} />
                <div className='d-flex justify-content-between'>
                    <h1>{pokemon.Name}</h1>
                    <span className='d-block fw-light text-end'>#{pokemon.Id}</span>
                </div>
                {
                    pokemon.Types.map(type => {
                        return <small key={pokemon.Id+type} className='badge rounded-pill m-1 pokemon-type'>{type}</small>
                    })
                }
                <div className='d-flex justify-content-center align-items-center bg-img position-relative z-2'>
                    <Image src={getImage(pokemon.Id)} alt={pokemon.Name} className='w-50' />
                </div>
            </Container>
            <Container className='py-5 rounded-top-5 bottomPage bg-white position-relative z-1'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    {
                        nav.map(item => {
                            return <div 
                                    key={item} 
                                    className={`p-2 ${item === activeNav ? 'text-black border-'+pokemon.Types[0] : 'text-secondary border-bottom'}`}
                                    onClick={() => setActiveNav(item)}>
                                        {item}
                                </div>
                        })
                    }
                </div>
                {
                    activeNav === nav[0] ?
                    <About pokemon={pokemon} /> :
                    activeNav === nav[1] ?
                    <BaseStats pokemon={pokemon} /> :
                    activeNav === nav[2 ]&&
                    <Evolution pokemon={pokemon} index={index} setIndex={setIndex} />
                }
            </Container>
        </div>}
        </>
    )
}

export default Pokemon;