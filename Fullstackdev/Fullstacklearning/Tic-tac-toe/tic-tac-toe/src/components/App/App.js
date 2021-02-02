import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import GridRow from "../GridRow/GridRow";


import { render } from '@testing-library/react';

const jsText = "Some text";

const operaterNumber = (num) => {
  return num*num;
};

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      gameState: [
                  ["","",""],
                  ["","",""],
                  ["","",""]
                ],
      playerTurn : 'X'  ,        
    };
  }
render(){
    return(
      <div className="container">
        <Header />
        <div id ="board">
          {
            this.state.gameState.map((row, rowIndex) => (
              <GridRow />
            ))
          }
          {/* <GridRow />
          <GridRow />
          <GridRow /> */}
        </div>
        <Footer turn={this.state.playerTurn} />
      </div>
    );
  }
}

export default App;
  
  // function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


