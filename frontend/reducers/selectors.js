import values from 'lodash/values';

export const selectAllPokemon = ({pokemon}) => (
  values(pokemon)
);

export const selectPokemonItem = (state, itemId) => {
  let selectedItem;
  state.pokemonDetail.items.forEach( item => {
    if ( Number(itemId) === item.id ) {
      selectedItem = item;
    }
  });
  return [selectedItem.name, selectedItem.happiness, selectedItem.price];
};
