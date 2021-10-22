import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    console.log(this.props)
    let renderPokemons = this.props.pokemonsArray.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
    console.log(renderPokemons)
    return (
      <Card.Group itemsPerRow={6}>
        {renderPokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection
