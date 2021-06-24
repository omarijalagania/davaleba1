import React from 'react';
import Form from './components/Form';
import Wizard2 from './components/Wizard2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/wizard2' component={Wizard2} />
        <Form />
      </Switch>
    </Router>
  );
}

export default App;
