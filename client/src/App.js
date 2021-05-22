import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import SavedPage from "./components/SavedPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/saved">
          <SavedPage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
