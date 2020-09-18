import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexContainer from './components/Index/IndexContainer'

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={IndexContainer}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
