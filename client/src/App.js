import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import axios from "axios";
import SearchPage from "./components/SearchPage";
import SavedPage from "./components/SavedPage";
// import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  // Smoke test google books search api (passed!)
  // useEffect(() => {
  //   axios.get("https://www.googleapis.com/books/v1/volumes?q=corgis")
  //     .then(console.log)
  //     .catch(console.log);
  // });
  return (
    <Router>
      <Navbar />
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
