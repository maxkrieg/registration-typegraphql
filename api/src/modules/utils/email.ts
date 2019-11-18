import nodemailer from 'nodemailer'
import uuid from 'uuid'
import redis from '../../redis'

const createConfirmationUrl = async (userId: number) => {
  const token = uuid.v4()
  await redis.set(token, userId, 'ex', 60 * 60 * 24) // 1 day expiration
  return `http://localhost:3000/user/confirm/${token}`
}

export const sendConfirmationEmail = async (userId: number, userEmail: string) => {
  const account = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
  })

  const confirmationUrl = await createConfirmationUrl(userId)
  const mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: userEmail, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: `<a href="${confirmationUrl}">${confirmationUrl}</a>`, // html body
  }

  // send mail with defined transport object
  const info = await transporter.sendMail(mailOptions)

  console.log('Message sent: %s', info.messageId)
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
