import '../scss/App.scss';

import Header from '../components/Header';
import About from '../components/About.js';
import BaseStats from '../components/BaseStats.js';
import Evolution from '../components/Evolution.js';

import { useParams } from 'react-router-dom';
import Pokedex from '../doc/pokedex.json';
import { useState } from 'react';

const Pokemon = () => {

    const param = useParams().pokemonId;
    const pokemon = Pokedex.find(pokemon => pokemon.Id === param);
    const nav = ['About', 'Base Stats', 'Evolution'];

    const [activeNav, setActiveNav] = useState('About');

    const getImage = (id) => {
        const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
        return url + id + '.png';
    }

    return (
        <div className={`App pokemonPage type-${pokemon.Types[0]}`}>
            <div className='container text-white topPage'>
                <Header type='pokemon' />
                <div className='d-flex justify-content-between'>
                    <h1>{pokemon.Name}</h1>
                    <span className='d-block fw-light text-end'>#{pokemon.Id}</span>
                </div>
                {
                    pokemon.Types.map(type => {
                        return <small key={pokemon.Id+type} className='badge rounded-pill m-1 pokemon-type'>{type}</small>
                    })
                }
                <div className='d-flex justify-content-center align-items-center bg-img position-relative'>
                    <img src={getImage(pokemon.Id)} alt={pokemon.Name} className='w-50' />
                </div>
            </div>
            <div className='container py-5 rounded-top-5 bottomPage bg-white position-relative'>
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
                    <Evolution pokemon={pokemon} />
                }
            </div>
        </div>
    )
}

export default Pokemon;