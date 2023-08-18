import Pokedex from '../doc/pokedex.json';

const List = () => {

    const getImage = (id) => {
        const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
        return url + id + '.png';
    }

    return (
        <div className='row'>
            {
                Pokedex.map(pokemon => {
                    return <div key={pokemon.Id} className='col-6'>
                        <a href={`/${pokemon.Id}`} className={`mb-3 rounded-4 d-block text-black position-relative overflow-hidden pokemonCard type-${pokemon.Types[0]}`}>
                            <div className='cardContent p-3'>
                                <div>
                                    <span className='d-block fw-light text-end pokemon-id'>#{pokemon.Id}</span>
                                    <h2>{pokemon.Name}</h2>
                                </div>
                                <div className='d-inline-flex flex-column'>
                                    {
                                        pokemon.Types.map(type => {
                                            return <small key={pokemon.Id+type} className='badge rounded-pill m-1 pokemon-type'>{type}</small>
                                        })
                                    }
                                </div>
                                <img src={getImage(pokemon.Id)} alt={pokemon.Name} className='position-absolute' />
                            </div>
                        </a>
                    </div>
                })
            }
        </div>
    )
}

export default List;