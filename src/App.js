import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './components/Details';
import NotFound from './components/common/NotFound';
import Header from './components/layout/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
