import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Pokemon from '../src/Components/Pokemon'



class App extends Component {


  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }   
  }

  handleSubmit = () => {
    this.props.history.push('/PokemonDisplay')
    this.setState({
      isEmptyState: false
    })
    console.log("push button")

}



  
render(){

  if(this.state.isEmptyState){
    return (
      
      <div className="App">
        <header className="App-header">
          <h1>Pokemon Database</h1>
          <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Go to the database
        </Button>
        </header>
      </div>
      
    )

  } else {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1>Pokemon Database</h1>
          <Pokemon/>
        </header>
      </div>
      
    )

  }

}
}

  
  export default withRouter(App);
  




