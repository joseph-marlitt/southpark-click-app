import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import ImageList from './components/ImageList/ImageList';


class App extends Component {
     render(){
       return ( 
        <Container onClick= {ImageList}/>
       )}
}
export default App;
