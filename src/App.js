import React from 'react'
import {Switch,  Route} from 'react-router-dom'
import './index.scss'
import Header from './components/Header/Header'
import Cart from './pages/Cart'
import Photo from './pages/Photo'
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photo />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
// install npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install node-sass