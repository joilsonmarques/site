import mailchimp from '@mailchimp/mailchimp_marketing'
import nodemailer from 'nodemailer'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER // e.g. us1
})

export default async (req, res) => {
  const { nome, email, telefone, cidade, uf, assunto, ideia } = req.body

  if (!nome) {
    return res.status(400).json({ error: 'Nome é obrigatório' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Email é obrigatório' })
  }

  if (!assunto) {
    return res.status(400).json({ error: 'Assunto é obrigatório' })
  }

  if (!ideia) {
    return res.status(400).json({ error: 'Ideia é obrigatória' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: 'anossacasadepodcasts@gmail.com',
      pass: process.env.SENDBLUE_SMTP_SECRET
    },
    secure: false,
    tls: {
      ciphers: 'SSLv3'
    }
  })

  const mailData = {
    from: email,
    to: process.env.CAIXA_EMAIL,
    subject: `${assunto}`,
    text: `${ideia}; Contato: ${nome}-${telefone}`,
    html: `<div>${ideia}</div><br/><br/>
          <div>Telefone: ${telefone}</div><br/>
          <div>${cidade}-${uf}</div></br>
          <div>Att. ${nome}</div></br>`
  }

  try {
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err)
      else console.log(info)
    })

    return res.status(200).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
