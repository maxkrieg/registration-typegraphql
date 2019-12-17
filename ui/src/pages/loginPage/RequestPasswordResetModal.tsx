import React, { useState, ChangeEvent } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { isValidEmailAddress } from '../../utils/email'
import { MutationSendResetPasswordEmailArgs } from '../../types/graphql.d'
import Spinner from 'react-bootstrap/Spinner'

const SEND_RESET_PASSWORD_EMAIL = gql`
  mutation SendResetPasswordEmail($email: String!) {
    sendResetPasswordEmail(email: $email)
  }
`

interface Props {}

const RequestPasswordResetModal: React.FC<Props> = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [formSubmissionError, setFormSubmissionError] = useState(false)
  const [validated, setValidated] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const [sendResetPasswordEmail, { loading, error }] = useMutation(SEND_RESET_PASSWORD_EMAIL, {
    onCompleted: _ => setEmailSent(true),
  })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setValidated(true)

    if (!email || !isValidEmailAddress(email)) {
      setFormSubmissionError(true)
      return
    }
    const variables: MutationSendResetPasswordEmailArgs = { email }
    sendResetPasswordEmail({ variables })
  }

  return (
    <>
      <p>Forgot password?</p>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Click here to reset your password
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset your password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter your email address and we'll send you a reset link:</Form.Label>
              <Form.Control
                required
                value={email}
                type="email"
                placeholder="Enter email"
                isValid={isValidEmailAddress(email)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setValidated(false)
                  setFormSubmissionError(false)
                  setEmail(e.target.value)
                }}
              />
            </Form.Group>
            {formSubmissionError && (
              <Alert variant="danger" style={{ marginTop: '10px', textAlign: 'center' }}>
                Please enter a valid email address.
              </Alert>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ height: '80px' }}>
          {error && (
            <Alert variant="danger" style={{ textAlign: 'center' }}>
              Error
            </Alert>
          )}
          <Button variant={emailSent ? 'primary' : 'secondary'} onClick={handleClose}>
            Close
          </Button>
          <Button
            variant={emailSent ? 'success' : 'primary'}
            disabled={emailSent}
            onClick={handleSubmitClick}
          >
            {emailSent ? 'Email sent ' : 'Submit '}
            {emailSent && <i className="fas fa-check" />}
            {loading && (
              <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RequestPasswordResetModal
