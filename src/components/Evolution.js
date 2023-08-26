import Pokedex from '../doc/pokedex.json';
import { Carousel, Button } from 'react-bootstrap';
import Card from './Card';

const Evolution = ({pokemon, index, setIndex}) => {

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

    return (
        <div className="Evolution">
            {
                pokemon.Evolution.length === 0 ?
                <p className='text-secondary text-center'>This pokemon does'nt have any evolution</p>
                :
                <div className='d-flex justify-content-between'>
                    <Button variant="link" className={`text-black fs-1 ${index === 0 ? 'opacity-0' : ''}`} onClick={() => setIndex(index - 1)} disabled={index === 0} >
                        <i className="bi bi-caret-left-fill"></i>
                    </Button>
                    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} className='w-100'>
                        {pokemon.Evolution.map(evolutionName => {
                            const evolution = Pokedex.find(pokemon => pokemon.Name === evolutionName);
                            return (
                                <Carousel.Item key={evolution.Id}>
                                    <Card pokemon={evolution} carousel={true} />
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>        
                    <Button variant="link" className={`text-black fs-1 ${index === pokemon.Evolution.length -1 ? 'opacity-0' : ''}`} onClick={() => setIndex(index + 1)} disabled={index === pokemon.Evolution.length -1}>
                        <i className="bi bi-caret-right-fill"></i>
                    </Button>
                </div> 
            }
        </div>
    )
}

export default Evolution;