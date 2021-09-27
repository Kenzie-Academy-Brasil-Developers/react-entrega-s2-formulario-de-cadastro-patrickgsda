import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Box from "@material-ui/core/Box";
import Matrix from "./images/Matrix.jpg";
import Escolhido from "./images/neo.jpg";

function App() {
  return (
    <div>
      <header>
        <Switch>
          <Route exact path="/">
            <Box
              component="div"
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${Matrix})`,
                height: "100vh",
              }}
            >
              <Register />
            </Box>
          </Route>
          <Route exact path="/:name">
            <Box
              component="div"
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${Escolhido})`,
                height: "100vh",
              }}
            >
              <Login />
            </Box>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
