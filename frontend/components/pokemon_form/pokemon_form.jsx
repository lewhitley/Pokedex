import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      moves: []
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state);
  }

  update(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className='pokemon-detail'>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)};
        </ul>

        <img src="/assets/pokemon-logo.png" alt="Copyright of Nintendo Pokemon" />
        <form className='pokemon-form'>
          <input type='text' name='name' placeholder='Name' onChange={this.update}/>
          <input type='text' name='image_url' placeholder='Image Url' onChange={this.update}/>

          <select name='poke_type' defaultValue='normal' onInput={this.update}>
            <option value='bug'>bug</option>
            <option value='dragon'>dragon</option>
            <option value='electric'>electric</option>
            <option value='fighting'>fighting</option>
            <option value='fire'>fire</option>
            <option value='flying'>flying</option>
            <option value='ghost'>ghost</option>
            <option value='grass'>grass</option>
            <option value='ground'>ground</option>
            <option value='ice'>ice</option>
            <option value='normal'>normal</option>
            <option value='poison'>poison</option>
            <option value='rock'>rock</option>
            <option value='steel'>steel</option>
            <option value='water'>water</option>
          </select>

          <input type='number' name='attack' placeholder='Attack' onChange={this.update}/>
          <input type='number' name='defense' placeholder='Defense' onChange={this.update}/>
          <input type='text' name='move1' placeholder='Move 1' onChange={this.update}/>
          <input type='text' name='move2' placeholder='Move 2' onChange={this.update}/>
          <button type='submit' onClick={this.handleSubmit}>Create Pokemon</button>
        </form>
      </div>);
  }
}

export default PokemonForm;
