export const getPublicUrl = (url: string | undefined) => {
  if (process.env.NEXT_PUBLIC_IMAGE_HOST) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }

  if (url) {
    return url
  }

  return null
}

export const exibirNovoEpisodio = (data: string) => {
  if (data && data != '') {
    const now = new Date()
    const past = new Date(data)
    const diff = Math.abs(now.getTime() - past.getTime())
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days <= 30 ? 'novo episódio' : ''
  } else {
    return ''
  }
}
