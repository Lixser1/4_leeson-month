import React, {useEffect, useState} from 'react';
import PokemonCard from "../../components/pokemons/PokemonCard";
import classes from "./PokemonPage.module.scss";

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();

    const fetchPokemon = async (url = 'https://pokeapi.co/api/v2/pokemon?limit=12') => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPokemonList(data.results);
            setNext(data.next)
            setPrev(data.previous);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <h2>Pokemon</h2>
            </div>
            <div className={classes.pokemonList}>
                {pokemonList.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
                ))}
            </div>
            <div className={classes.pagination}>
                <button className={classes.prev} onClick={() => fetchPokemon(prev)}>Prev</button>
                <div className={classes.count}>1</div>
                <button className={classes.next} onClick={() => fetchPokemon(next)}>Next</button>
            </div>
        </div>
    );
};

export default PokemonPage;