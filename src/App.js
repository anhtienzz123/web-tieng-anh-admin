import PersonManager from "features/PersonManager";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/person" component={PersonManager} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
