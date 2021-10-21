import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    state = {
      pokemons: [],
    }


    componentDidMount() {
      fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => {
          // console.log(pokemons)
          this.setState({pokemons})
          // console.log(pokemons)
      })
    }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection  pokemons={this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
