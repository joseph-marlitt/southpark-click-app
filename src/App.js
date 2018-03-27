import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"

class App extends Component {
     render(){
       return ( 
         <Wrapper>
          <Title> South Park Clicky Game</Title>
          <Container/>
        </Wrapper>
       )}
}
export default App;
