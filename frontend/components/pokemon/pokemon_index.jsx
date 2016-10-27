import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = props => {
  return (
    <div className="pokedex">
      <ul>
        {props.pokemon.map( (pokemon, idx) => (
          <PokemonIndexItem key={idx} pokemon={pokemon}/>
        ))}
      </ul>

      {props.children}
    </div>
  );
};

export default PokemonIndex;
