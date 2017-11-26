import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Post from './Post';
import About from './About';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/post:id" component={Post}/>
          <Route exact path="/about" component={About}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
