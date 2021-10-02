import mailchimp from '@mailchimp/mailchimp_marketing'

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

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_IDEIA_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: nome,
          PHONE: telefone,
          CIDADE: cidade,
          UF: uf,
          ASSUNTO: assunto,
          IDEIA: ideia
        },
        tags: ['Quero fazer podcast']
      }
    )

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
