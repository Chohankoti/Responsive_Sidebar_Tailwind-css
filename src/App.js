import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Contack from './components/Contack';

function App() {
  const [activeRoute, setActiveRoute] = useState('/dashboard');
  const handleSidebarClick = (route) => {
    setActiveRoute(route);
  };

  return (
    <Router>
      <div className="flex">
        <Navbar />
        <Sidebar onSidebarClick={handleSidebarClick} />

        <div className="content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contack} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
