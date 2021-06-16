import React from "react";
import "./App.css";
import Headerbar from "./component/Headerbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Show from "./component/Show";
import Add from "./component/Add";
import "antd/dist/antd.css";

function App() {
  const [todo, setTodo] = React.useState([]);

  const addValue = (data) => {
    todo.push(data);
    console.log(todo);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <Headerbar />
        <Switch>
          <Route path="/show">
            <Show />
          </Route>
          <Route path="/">
            <Add/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
