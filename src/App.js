import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./containers/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
