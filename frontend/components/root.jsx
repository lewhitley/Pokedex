import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon_detail/pokemon_detail_container';
import ItemDetailContainer from './item_detail/item_detail_container';
import PokemonFormContainer from './pokemon_form/pokemon_form_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { requestAllPokemon, requestPokemon } from '../actions/pokemon_actions';

const Root = ({ store }) => {
  const requestAllPokemonOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestPokemonOnEnter = (nextState) => {
    store.dispatch(requestPokemon(nextState.params.id));
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={PokemonIndexContainer} onEnter={requestAllPokemonOnEnter}>
              <IndexRoute component={PokemonFormContainer} />
              <Route path="pokemon/:id" component={PokemonDetailContainer} onEnter={requestPokemonOnEnter} >
                <Route path="item/:itemId" component={ItemDetailContainer} />
              </Route>
          </Route>
      </Router>
    </Provider>
  );
};

export default Root;
