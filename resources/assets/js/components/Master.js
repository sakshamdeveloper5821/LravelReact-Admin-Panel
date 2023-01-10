// Master.js

import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/*Components Import*/
import Dashboard from'./Dashboard';
import Home from'./Home';
import Comments from'./Comments';

class Master extends Component {
  render(){
    return (
      <Router>
        <div>
          <Dashboard>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/comments" component={Comments}/>
            </Switch>
          </Dashboard>
        </div>
      </Router>
    )
  }
}
export default Master;