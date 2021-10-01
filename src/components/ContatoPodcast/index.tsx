import React, { useRef, useState } from 'react'

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef<HTMLInputElement>(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/contato-podcast', {
      body: JSON.stringify({
        email: inputEl?.current?.value
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
        setMessage('Ops, você já entrou em contato conosco.')
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
      'Muito obrigado! 🎉 Iremos analisar e logo, logo entraremos em contato.'
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
      <div>{message ? message : `Prometemos que não enviaremos spam.`}</div>
      <button type="submit">{'✨ Inscreva-se 💌'}</button>
    </form>
  )
}

export default Subscribe
