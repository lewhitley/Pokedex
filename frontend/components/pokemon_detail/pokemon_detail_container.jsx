import { connect } from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

export default connect(
  mapStateToProps
)(PokemonDetail);
