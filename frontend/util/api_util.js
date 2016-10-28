export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: "GET",
    datatype: "json",
    url: "/api/pokemon",
    success,
    error
  });
};

export const fetchPokemon = (id, success, error) => {
  $.ajax({
    method: "GET",
    datatype: "json",
    url: `/api/pokemon/${id}`,
    success,
    error
  });
};

export const createNewPokemon = ({pokemon}, success, error) => {
  pokemon.moves.push(pokemon.move1);
  pokemon.moves.push(pokemon.move2);
  // pokemon.moves = `${pokemon.move1}, ${pokemon.move2}`;
  pokemon.attack = Number(pokemon.attack);
  pokemon.defense = Number(pokemon.defense);
  $.ajax({
    method: "POST",
    datatype: "json",
    url: `/api/pokemon`,
    data: {"pokemon": pokemon},
    success,
    error
  });
};
