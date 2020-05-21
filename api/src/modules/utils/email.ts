import nodemailer from 'nodemailer'
import uuid from 'uuid'
import redis from '../../redis'
import Mail from 'nodemailer/lib/mailer'

interface MailOptions {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

let emailAccount: nodemailer.TestAccount | null = null
const getEmailAccount = async (): Promise<nodemailer.TestAccount> => {
  if (emailAccount === null) {
    emailAccount = await nodemailer.createTestAccount()
  }
  return emailAccount
}

let emailTransporter: Mail | null = null
const getEmailTransporter = (account: nodemailer.TestAccount): Mail => {
  if (emailTransporter === null) {
    emailTransporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass, // generated ethereal password
      },
    })
  }
  return emailTransporter
}

const sendEmail = async (mailOptions: MailOptions) => {
  const account = await getEmailAccount()
  const transporter = getEmailTransporter(account)
  const result = await transporter.sendMail(mailOptions)
  console.log('Message sent: %s', result.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result))
}

export const sendResetPasswordEmail = async (userId: number, userEmail: string) => {
  const token = 'reset-password-' + uuid.v4()
  await redis.set(token, userId, 'ex', 60 * 60 * 24) // 1 day expiration
  const pageUrl = `http://localhost:3000/user/reset-password/${token}`
  const mailOptions: MailOptions = {
    from: '"Max Krieg" <hellomaxkrieg@gmail.com>',
    to: userEmail,
    subject: 'Reset your password',
    text: 'Click the link to reset your password',
    html: `<p>Click the link below to reset your password.</p><br/><a href="${pageUrl}">${pageUrl}</a>`,
  }
  await sendEmail(mailOptions)
}

export const sendConfirmationEmail = async (userId: number, userEmail: string) => {
  const token = 'confirm-email-' + uuid.v4()
  await redis.set(token, userId, 'ex', 60 * 60 * 24) // 1 day expiration
  const pageUrl = `http://localhost:3000/user/confirm/${token}`
  const mailOptions: MailOptions = {
    from: '"Max Krieg" <hellomaxkrieg@gmail.com>',
    to: userEmail,
    subject: 'Confirm your email',
    text: 'Click the link to confirm your email',
    html: `<p>Click the link below to conirm your email address.</p><a href="${pageUrl}">${pageUrl}</a>`,
  }
  await sendEmail(mailOptions)
}
