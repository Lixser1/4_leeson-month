
import React from "react";
import "./PokemonGrid.css";

const PokemonGrid = () => {
    const pokemonList = new Array(12).fill({
        name: "Чармандер",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    });

    return (
        <div className="pokemon-container">
            <h1 className="title">Покемоны</h1>
            <div className="pokemon-grid">
                {pokemonList.map((pokemon, index) => (
                    <div key={index} className="pokemon-card">
                        <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                        <p className="pokemon-name">{pokemon.name}</p>
                        <button className="details-button">Подробнее</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button className="pagination-button">Назад</button>
                <span className="page-number">1</span>
                <button className="pagination-button">Вперед</button>
            </div>
        </div>
    );
};

export default PokemonGrid;
