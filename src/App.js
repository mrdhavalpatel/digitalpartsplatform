import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './view/home';
import Search from './view/search';
import SingleProduct from './view/singleproduct';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/singleproduct" component={SingleProduct} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
