import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export class App extends Component {
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    let nation = "in";
    let pagesize = 5;
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path='/'>
              <News setProgress={this.setProgress}  key="home" pageSize={pagesize} country={nation} category="general" />
            </Route>
            <Route exact path='/general'>
              <News setProgress={this.setProgress} key="general" pageSize={pagesize} country={nation} category="general" />
            </Route>
            <Route exact path='/entertainment'>
              <News setProgress={this.setProgress} key="entertainment" pageSize={pagesize} country={nation} category="entertainment" />
            </Route>
            <Route exact path='/business'>
              <News setProgress={this.setProgress} key="business" pageSize={pagesize} country={nation} category="business" />
            </Route>
            <Route exact path='/health'>
              <News setProgress={this.setProgress} key="health" pageSize={pagesize} country={nation} category="health" />
            </Route>
            <Route exact path='/science'>
              <News setProgress={this.setProgress} key="science" pageSize={pagesize} country={nation} category="science" />
            </Route>
            <Route exact path='/sports'>
              <News setProgress={this.setProgress} key="sports" pageSize={pagesize} country={nation} category="sports" />
            </Route>
            <Route exact path='/technology'>
              <News setProgress={this.setProgress} key="technology" pageSize={pagesize} country={nation} category="technology" />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
        
      </>
    )
  }
}

export default App