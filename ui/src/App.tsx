import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserPage from './pages/UserPage'
import EmailConfirmedPage from './pages/EmailConfirmedPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
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
