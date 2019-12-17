import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserPage from './pages/UserPage'
import EmailConfirmedPage from './pages/EmailConfirmedPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
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
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/user" exact component={UserPage} />
        <Route path="/user/confirm/:token" exact component={EmailConfirmedPage} />
        <Route path="/user/reset-password/:token" exact component={ResetPasswordPage} />
      </Switch>
    </Router>
  )
}

export default App
