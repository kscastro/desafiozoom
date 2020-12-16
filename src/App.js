import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlesPage from "./pages/Articles/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/index";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={ArticlesPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
