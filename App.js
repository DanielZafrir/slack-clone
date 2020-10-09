import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import { useStateValue } from "./ContextApi/StateProvider";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="app__description">
                    <div className="app__descriptionContainer">
                      <h2>WELCOME! THIS IS MY SLACK CLONE</h2>
                      <h4>you can add channels and go to each channel chat!</h4>
                    </div>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
