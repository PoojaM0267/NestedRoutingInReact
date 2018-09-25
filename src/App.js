import React, { Component } from 'react';
import { BrowserRouter as Router, Route,
  //  Switch
  } from 'react-router-dom';
// import Dashboard from './dashboard';
import Home from './home';
import Layout from './layout';
// import KanbanBoard from './kanban-board';
// import Tasks from './tasks';
// import Settings from './settings';
// import Team from './team';
// import Activities from './activities';
// import Documents from './documents';

import './App.css';

class App extends Component {
  debugger;
  render() {

    return (
      <div className="App">       
        <Router> 
          <div>
            {/* <Switch> */}
              <Route exact path = "/" component={Home} />  
              <Route exact path = "/dashboard/:id?" component={Layout} />               
          </div>
        </Router>        
      </div>        
    );
  }
}

export default App;
