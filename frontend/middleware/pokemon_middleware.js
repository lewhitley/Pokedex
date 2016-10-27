import { fetchAllPokemon, fetchPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
  receiveAllPokemon,
  REQUEST_POKEMON,
  receivePokemon} from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonSuccess = data => {
    dispatch(receivePokemon(data));
  };
  const Error = () => console.log("Didn't work :(");

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess, Error);
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.id, receivePokemonSuccess, Error);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
