import React, { Component } from 'react'
//import logo from './logo.svg'
//import './App.css'
import ReactRouterBasicExample from './components/ReactRouterBasicExample'
import AuthExample from './components/AuthExample'
import CustomLinkExample from './components/CustomLinkExample'
import PreventingTransitionsExample from './components/PreventingTransitionsExample'
import NoMatchExample from './components/NoMatchExample'
import RecursiveExample from './components/RecursiveExample'
import SidebarExample from './components/SidebarExample'
import AnimationExample from './components/AnimationExample'
import AmbiguousExample from './components/AmbiguousExample'
import RouteConfigExample from './components/RouteConfigExample'
import ModalGallery from './components/ModalGallery'
import StaticRouterExample from './components/StaticRouterExample'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code> src/App.js</code> and save to reload.
        </p> */}
        <ReactRouterBasicExample />
        {/*<hr/>*/}
        {/*<AuthExample />*/}
        {/*<hr/>*/}
        {/*<CustomLinkExample />*/}
        {/*<hr/> */}
        {/*<PreventingTransitionsExample />*/}
        {/*<NoMatchExample />*/}
        {/*<RecursiveExample />*/}
        {/*<SidebarExample />*/}
        {/*<AnimationExample />*/}
        {/*<AmbiguousExample />*/}
        {/*<RouteConfigExample />*/}
        {/*<ModalGallery />*/}
        {/*<StaticRouterExample />*/}
      </div>
    )
  }
}

export default App
