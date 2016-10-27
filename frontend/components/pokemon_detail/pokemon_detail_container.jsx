import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import receivePokemon from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

export default connect(
  mapStateToProps
)(PokemonDetail);
