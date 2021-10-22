import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    state = {
      pokemons: [],
      search: ""
    }

    componentDidMount() {
      fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => {
          console.log(pokemons)
          this.setState({pokemons})
          // console.log(pokemons)
      })
    }

    onType = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    onSearch = () => {
     return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    }



  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onType={this.onType}/>
        <br />
        <PokemonCollection  pokemonsArray={this.onSearch()}/>
      </Container>
    )
  }
}

export default PokemonPage
