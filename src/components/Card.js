import { Image } from 'react-bootstrap';

const Card = ({pokemon, carousel}) => {

    const getImage = (id) => {
        const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
        return url + id + '.png';
    }
    
    return (
        <a href={`/pokemon/${pokemon.Id}`} className={`rounded-4 d-block text-black position-relative overflow-hidden pokemonCard type-${pokemon.Types[0]}`}>
            <div className='cardContent p-3'>
                <div>
                    <span className='d-block fw-light text-end pokemon-id'>#{pokemon.Id}</span>
                    <h2 className='fs-5'>{pokemon.Name}</h2>
                </div>
                <div className='d-inline-flex flex-column'>
                    {
                        pokemon.Types.map(type => {
                            return <small key={pokemon.Id+type} className='badge rounded-pill m-1 pokemon-type'>{type}</small>
                        })
                    }
                </div>
                <Image src={getImage(pokemon.Id)} alt={pokemon.Name} className={`position-absolute ${carousel ? 'img-carousel' : ''}`} />
            </div>
        </a>
    )
}

export default Card;