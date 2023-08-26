import React, { createContext, useContext, useState, useEffect } from 'react';
import Pokedex from '../doc/pokedex.json';

// Créer le contexte des favoris
const MyContext = createContext();

// Provider pour le contexte des favoris
export const MyProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Pokedex;
        setPokemonList(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ favorites, setFavorites, input, setInput, search, setSearch, pokemonList, isLoading }}>
      {children}
    </MyContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte des favoris
export const useMyContext = () => {
  return useContext(MyContext);
};

    