import React, { ReactNode, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface UserPageWrapperProps {
  children: ReactNode
}

const UserPageWrapper: React.FC<UserPageWrapperProps> = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h3 className="user_header">User Account</h3>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default UserPageWrapper
