import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/home.js';
import Top10Earthquakes from './TopEarthquakes/Top10Earthquakes.js';
import Casualties from './Casualties/Casualties.js';
import Shakertable from './Shakertable/Shakertable.js';
import Output from './Output/Output.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/top-10-earthquakes" component={Top10Earthquakes} />
        <Route path="/casualties" component={Casualties} />
        <Route path="/shaker-table" component={Shakertable} />
        <Route path="/output" component={Output} />
      </Switch>
    </Router>
  );
}

export default App;
