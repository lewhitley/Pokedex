import values from 'lodash/values';

const selectAllPokemon = ({pokemon}) => (
  values(pokemon)
);

export default selectAllPokemon;
