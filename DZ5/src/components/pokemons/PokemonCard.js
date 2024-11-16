import React, { useEffect, useState } from 'react';
import classes from "./PokemonCard.module.scss";

const PokemonCard = ({ pokemonUrl }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(pokemonUrl);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonData();
    }, [pokemonUrl]);

    if (!pokemon) return null;

    return (
        <div className={classes.pokemonCard}>
            <div className={classes.pokeInfo}>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                <h3>{pokemon.name}</h3>
            </div>
            <button>
                Подробнее
            </button>
        </div>
    );
};

export default PokemonCard;