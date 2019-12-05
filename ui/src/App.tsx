import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'
import EmailConfirmed from './pages/EmailConfirmed'
import { sections } from './content/home'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar expand="sm" sticky="top" bg="light" variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href={window.location.href}>MAX KRIEG</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            {sections.map(({ title }) => (
              <Nav.Link key={title} href={`//${window.location.host}#${title}`}>
                {title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" exact component={User} />
        <Route path="/user/confirm/:token" exact component={EmailConfirmed} />
      </Switch>
    </Router>
  )
}

export default App
