import React, { useRef, useState } from 'react'
import * as S from './styles'

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef<HTMLInputElement>(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('none')

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
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
        setMessage('Ops, você já está inscrito na nossa newsletter.')
      } else {
        setMessage(error)
      }

      setStatus('error')

      return
    }

    // 5. Clear the input value and show a success message.
    if (inputEl.current) {
      inputEl.current.value = ''
    }
    setMessage('Parabéns! 🎉 Você está inscrito na nossa newsletter.')
    setStatus('ok')
  }

  return (
    <S.Wrapper>
      <form onSubmit={subscribe}>
        <label htmlFor="email-input">
          {'Receba nossas novidades por email'}
        </label>
        <input
          id="email-input"
          name="email"
          placeholder="nome@email.com"
          ref={inputEl}
          required
          type="email"
        />
        <button type="submit">{'OK'}</button>
        <span className={status ? status : `none`}>
          {message ? message : `Prometemos que não enviaremos spam.`}
        </span>
      </form>
    </S.Wrapper>
  )
}

export default Subscribe
