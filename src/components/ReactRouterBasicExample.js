import React from "react";
import {
  BrowserRouter as Router, Route, Link,
  Redirect, Prompt, Switch
} from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Route
            path="/order"
            children={props => {
              const { match } = props
              return <div>
                <span>{ match ? '<' : null}</span>
                <Link to="/order">Order</Link>
              </div>
            }}
            //component={() => <div>Order inner</div>}
          />
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/order" component={() => <div>Order outer</div>}/>
        <Route path="/order/:direction(asc|desc)" component={Direction}/>
        <Route component={() => <div>404</div>}/>
      </Switch>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <Prompt
      when={true}
      message={location =>
        `Are you sure you want to go to ${location.pathname}`
      }
    />
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = props => {
  console.log('props=', props)
  const { match } = props
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
};


const Direction = props => {
  console.log('props=', props)
  return (
    <div>direction</div>
  )
}

export default BasicExample;
