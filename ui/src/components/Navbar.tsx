import React from 'react'
import { Nav, Navbar as NavbarRB, Spinner, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import sections from '../pages/HomePage/content/sections'
import { GET_USER_INFO } from '../shared/queries'
import { User } from '../types/graphql.d'

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`

const Navbar: React.FC = () => {
  const client = useApolloClient()
  const { data, loading: userInfoLoading } = useQuery<{ user: User }>(GET_USER_INFO)
  const [logout, { loading: logoutLoading }] = useMutation(LOGOUT, {
    onCompleted: (_) => {
      client.resetStore()
      window.location.replace(window.location.origin)
    },
  })
  let userNavbarText = (
    <>
      <Nav.Link as="span" style={{ display: 'none' }}>
        <Link to="/login">Log In</Link>
      </Nav.Link>
      <Nav.Link as="span" style={{ display: 'none' }}>
        <Link to="/register">Register</Link>
      </Nav.Link>
    </>
  )
  if (userInfoLoading) {
    userNavbarText = <Spinner animation="grow" variant="primary" />
  } else if (data && data.user.fullName) {
    userNavbarText = (
      <NavbarRB.Text>
        <Link to="/user">{data.user.fullName}</Link>
        <Button size="sm" style={{ marginLeft: '10px' }} onClick={() => logout()}>
          Log out{' '}
          {logoutLoading && (
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          )}
        </Button>
      </NavbarRB.Text>
    )
  }
  return (
    <NavbarRB
      expand="sm"
      sticky="top"
      bg="light"
      variant="light"
      style={{ boxShadow: '0 2px 10px 0px #777' }}
    >
      <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
      <Link to="/">
        <NavbarRB.Brand as="span">MAX KRIEG</NavbarRB.Brand>
      </Link>
      <NavbarRB.Collapse>
        <Nav>
          {sections.map(({ title }) => (
            <Nav.Link key={title} href={`//${window.location.host}#${title}`}>
              {title}
            </Nav.Link>
          ))}
        </Nav>
      </NavbarRB.Collapse>
      <NavbarRB.Collapse className="justify-content-end">{userNavbarText}</NavbarRB.Collapse>
    </NavbarRB>
  )
}

export default Navbar
