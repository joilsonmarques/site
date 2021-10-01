import React, { useRef, useState } from 'react'

function Subscribe() {
  const inputEl = useRef<HTMLInputElement>(null)
  const inputIdeia = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/contato-ideia', {
      body: JSON.stringify({
        email: inputEl?.current?.value,
        ideia: inputIdeia?.current?.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      if (error === 'Member Exists') {
        setMessage('Ops, você já nos mandou uma ideia.')
      } else {
        setMessage(error)
      }

      return
    }

    // 5. Clear the input value and show a success message.
    if (inputEl.current) {
      inputEl.current.value = ''
    }

    setMessage(
      'Já adianto que gostaremos da sua ideia! 🎉 Em breve entraremos contato .'
    )
  }

  return (
    <form onSubmit={subscribe}>
      <label htmlFor="email-input">{'Endereço de email'}</label>
      <input
        id="email-input"
        name="email"
        placeholder="voce@maravilhoso.com"
        ref={inputEl}
        required
        type="email"
      />
      <br />
      <label htmlFor="ideia-input">{'Ideia'}</label>
      <input
        id="ideia-input"
        name="ideia"
        placeholder="minha ideia muito boa"
        ref={inputIdeia}
        required
        type="text"
      />
      <div>{message ? message : `Prometemos que não enviaremos spam.`}</div>
      <button type="submit">{'✨ Inscreva-se 💌'}</button>
    </form>
  )
}

export default Subscribe
