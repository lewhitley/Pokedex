import React from 'react';
import {fetchPokemon} from '../../util/api_util';

const PokemonDetail = props => {
  const handleItemClick = url => e => props.router.push(url);

  if (props.pokemonDetail.name) {
    return (
      <div className="pokemon-detail">
        <ul>
          <li>
            <img src={props.pokemonDetail.image_url}/>
          </li>
          <li>{props.pokemonDetail.name}</li>
          <li>Type: {props.pokemonDetail.poke_type}</li>
          <li>Attack: {props.pokemonDetail.attack}</li>
          <li>Defense: {props.pokemonDetail.defense}</li>
          <li>Moves: {props.pokemonDetail.moves.join(", ")}</li>
          <li className='toys'>
            Items:
            <ul className='toy-list'>
              {props.pokemonDetail.items.map( (item, idx) => (
                <li key={idx}>
                  <img src={item.image_url}
                    onClick={handleItemClick(`pokemon/${props.pokemonDetail.id}/item/${item.id}`)}/>
                </li>) )}
              </ul>
            </li>
          </ul>

          {props.children}
      </div>
      );
  } else {
    return (<h2></h2>);
  }
};

export default PokemonDetail;
