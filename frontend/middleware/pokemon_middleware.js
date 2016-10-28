import { fetchAllPokemon,
  fetchPokemon,
  createNewPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
  receiveAllPokemon,
  REQUEST_POKEMON,
  receivePokemon,
  CREATE_POKEMON,
  receiveNewPokemon,
  receivePokemonErrors } from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonSuccess = data => dispatch(receivePokemon(data));
  const receiveNewSuccess = data => {
    if (data.id) {
        dispatch(receiveNewPokemon(data));
      hashHistory.push(`/pokemon/${data.id}`);
    } else {
      dispatch(receivePokemonErrors(data));
    }
  };
  const Error = () => console.log("Didn't work :(");

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess, Error);
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.id, receivePokemonSuccess, Error);
      return next(action);
    case CREATE_POKEMON:
      next(action);
      createNewPokemon(action, receiveNewSuccess, Error);
      break;
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
