import React from 'react';
import {fetchPokemon} from '../../util/api_util';

const PokemonDetail = props => {

  if (props.pokemonDetail.name) {
    return (
      <ul>
        <li>
          <img src={props.pokemonDetail.image_url}/>
        </li>
        <li>{props.pokemonDetail.name}</li>
        <li>Type: {props.pokemonDetail.poke_type}</li>
        <li>Attack: {props.pokemonDetail.attack}</li>
        <li>Defense: {props.pokemonDetail.defense}</li>
        <li>Moves: {props.pokemonDetail.moves}</li>
        <li>
          Toys:
          <ul>
            {props.pokemonDetail.items.map( item => (
              <li>
                <img src={item.image_url}/>
              </li>) )}
            </ul>
          </li>
        </ul>
      );
  } else {
    return (<h2>a</h2>);
  }
};

export default PokemonDetail;
