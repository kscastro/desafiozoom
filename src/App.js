import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./pages/Articles/index";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Articles} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
