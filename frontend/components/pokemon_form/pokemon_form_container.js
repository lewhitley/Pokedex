import { createPokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';

const mapStateToProps = props => ({
  errors: props.errors
});

const mapDispatchToProps = dispatch => ({
  createPokemon: pokemon => dispatch(createPokemon(pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
