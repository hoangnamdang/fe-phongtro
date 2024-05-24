import React from "react";
import { Path } from "./utils/path";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./containers/Public";

function App(props) {
  return (
    <div>
      <Routes>
        <Route path={Path.HOME} element={<Home />}>
          <Route path={Path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
