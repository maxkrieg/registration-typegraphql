import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const confirmUserMutation = gql`
  mutation confirmUser($token: String!) {
    confirmUser(token: $token)
  }
`

const EmailConfirmedPage: React.FC<RouteComponentProps> = props => {
  const { token } = useParams()
  const [isConfirmed, setConfirmed] = useState(false)

  const [sendConfirmation] = useMutation(confirmUserMutation, {
    onCompleted: _ => setConfirmed(true),
  })

  useEffect(() => {
    sendConfirmation({
      variables: { token },
    })
  }, [token, sendConfirmation])

  return (
    <div>
      Token {token}
      Is confirmed {isConfirmed}
    </div>
  )
}

export default EmailConfirmedPage
