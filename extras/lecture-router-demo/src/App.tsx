import React from 'react';
import logo from './logo.svg';
import NavbarComponent from './components/navbar.component';
import './App.css';
import { AccountComponent } from './components/account.component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/home.component';
import { LoanComponent } from './components/loan.component';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/home">
              <HomeComponent />
            </Route>
            <Route path="/accounts">
              <AccountComponent />
            </Route>
            <Route path="/loans">
              <LoanComponent />
            </Route>
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
