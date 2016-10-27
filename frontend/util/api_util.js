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
