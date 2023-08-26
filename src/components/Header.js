import { useEffect, useRef } from "react";
import { Form } from 'react-bootstrap';
import { useMyContext } from '../utils/MyContext'; // Importer le hook useMyContext


const Header = ({type, pokemon}) => {

    const { favorites, setFavorites, setInput, search, setSearch } = useMyContext(); // Utiliser le hook useMyContext

    const inputRef = useRef(null);

    useEffect(() => {
        search && inputRef.current.focus();
    }, [search]);

    // Load favorites from LocalStorage
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
        }
    }, [setFavorites]);

    // Update favorites in LocalStorage every time it changes
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        const isFavorite = favorites.includes(id);
        if (isFavorite) {
            const updatedFavorites = favorites.filter((el) => el !== id);
            setFavorites(updatedFavorites);
        } else {
            const updatedFavorites = [...favorites, id];
            setFavorites(updatedFavorites);
        }
    };

    return (
        <>
        {
            type === 'app' ?
            <header className="d-flex justify-content-between align-items-center p-3 fs-4 position-fixed w-100 bg-white top-0 start-0 z-2">
                {
                    search ? <Form.Control type="text" className="me-5" onChange={(e) => setInput(e.target.value)} ref={inputRef} /> : 
                    <h1 className="m-0">Pokedex</h1>
                }
                <div className="d-flex justify-content-center align-items-center" role="button">
                    {!search && <a href="/favorites" className="d-flex justify-content-center align-items-center text-black me-3">
                        {favorites.length === 0 ? <i className="bi bi-heart"></i> : <i className="bi bi-heart-fill"></i>}
                    </a>}
                    <div onClick={() => setSearch(!search)} className="d-flex justify-content-center align-items-center text-black">
                        {search ? <i className="bi bi-x-lg"></i> : <i className="bi bi-search"></i>}
                    </div>
                </div>
            </header> :
            type === 'favorites' ?
            <header className="d-flex p-3 fs-4 position-fixed w-100 bg-white top-0 start-0 z-2">
                <a href="/" className="text-black me-3">
                    <i className="bi bi-arrow-left"></i>
                </a>
                <h1 className="m-0">Favorites</h1>
            </header> :
            type === 'pokemon' &&
            <header className="d-flex justify-content-between align-items-center py-3 fs-4 position-relative z-3">
                <a href="/" className="text-white">
                    <i className="bi bi-arrow-left"></i>
                </a>
                <div className="d-flex justify-content-center align-items-center" role="button" onClick={() => toggleFavorite(pokemon.Id)}>
                    {favorites.includes(pokemon.Id) ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                </div>
            </header>
        }
        </>
    )
}

export default Header;