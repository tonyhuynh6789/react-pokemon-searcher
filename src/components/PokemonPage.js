import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import PokemonCard from './PokemonCard'

class PokemonPage extends React.Component {

    state = {
      pokemons: [],
      name: "",
      hp: "",
      frontImage: "",
      backImage:"",
      search: ""
    }

  

    componentDidMount() {
      fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => {
          console.log(pokemons)
          this.setState({pokemons})
          console.log(pokemons)
      })
    }


    handleSubmitForm = (e) => {
        e.preventDefault()

      const nameObj= this.state.name 
      const hpObj =this.state.hp
      const backImageObj = this.state.backImage
      const frontImageObj = this.state.frontImage

      fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": `${nameObj}`, 
            "hp": `${hpObj}`, 
            "backImage": `${backImageObj}`, 
            "frontImage": `${frontImageObj}`
            
        })
      })
      .then(resp => resp.json())
      .then(pokemon => addPokemon(pokemon))
    }


    addPokemon = (pokemon) => {
      this.setState({pokemon: [...this.state.pokemons, pokemon]})
      return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
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
        <PokemonForm onType={this.onType} handleSubmitForm={this.handleSubmitForm} />
        <br />
        <Search onType={this.onType}/>
        <br />
        <PokemonCollection  pokemonsArray={this.onSearch()}/>
      </Container>
    )
  }
}

export default PokemonPage
