import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import KanbanBoard from './kanban-board';
import Tasks from './tasks';
import Settings from './settings';
import Team from './team';
import Activities from './activities';
import Documents from './documents';

import './App.css';

class Layout extends Component {
  
  render() {
debugger;
    return (
        <div className="App">       
          <Router> 
            <div>
                <Dashboard>
                  <Switch> 
                    <Route path="/dashboard/1/kanban-board" component={KanbanBoard}/> 
                    <Route path="/dashboard/1/documents" component={Documents} />         
                    <Route path="/dashboard/1/tasks" component={Tasks}/>                
                    <Route path='/dashboard/1/team' component={Team}/>
                    <Route path="/dashboard/1/activities" component={Activities}/>
                    <Route path="/dashboard/1/settings" component={Settings}/> 
                  </Switch>     
                </Dashboard>
            </div>
          </Router>        
        </div>        
      );
    }
  }
  
  export default Layout;