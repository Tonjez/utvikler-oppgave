import React  from 'react';
import Button from '@material-ui/core/Button';


class Pokemon extends React.Component {
    constructor() {
      super()
      this.state = { pokemons: [],
                    number: 1,
                isReady: false};

                    this.changeNumber = this.changeNumber.bind(this);
                    this.onSubmitNumber = this.onSubmitNumber.bind(this);
    }
  
    componentDidMount() {

      fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then(response => response.json())
        .then(pokemons => {
          this.setState({ 
            pokemons,
        isReady: true});
        })
    }



    changeNumber = (event) => {
        
        this.setState({
          number: event.target.value
        })
    }

    onSubmitNumber = (event) => {
        console.log(this.state.number);

        fetch("https://pokeapi.co/api/v2/pokemon/"+ this.state.number)
        .then(response => response.json())
        .then(pokemons => {
          this.setState({ 
              pokemons })
        })

        event.preventDefault();

    }

    
    
    
      
    render() {


        if(this.state.isReady){

            return (
                <div>
                   <form onSubmit={this.onSubmitNumber}>
                   <label>
                  <input type="text" value={this.state.value} onChange={this.changeNumber} />
                  </label>
                  <Button type="submit" variant="contained" color="primary" value="Submit">
                    Fetch new Pokemon
                 </Button>
                 </form>
                 <ul>
                <li>Pokedex ID: {this.state.pokemons.id}</li>
                <li>Name: {this.state.pokemons.name}</li>
                <li>Heigh: {this.state.pokemons.height}</li>
                <li>Weight: {this.state.pokemons.weight}</li>
                </ul>
                <img src={this.state.pokemons.sprites.front_default} style={{width: 150, height: 150}} alt="pokemonpics"></img>
                </div>
              
              )

        } else{
            return (
                <div>
                  <h1>Loading...</h1>

                 
                </div>
              )

        }

        
    }
  }

  export default Pokemon;