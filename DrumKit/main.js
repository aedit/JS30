const keys = Array.from(document.querySelectorAll('.item'))

keys.forEach(key =>
  key.addEventListener('click', () => {
    const audio = document.querySelector(`audio[data-key=${key.classList[1]}`)
    if (!audio) return

    audio.currentTime = 0
    audio.play()
  }),
)

window.addEventListener('keydown', e => {
  keys.forEach(key => {
    const r = key.getElementsByTagName('span')

    if (e.code == 'Key' + r[0].innerText) {
      const audio = document.querySelector(
        `audio[data-key=${key.classList[1]}]`,
      )
      key.classList.add('playing')
      if (!audio) return

      audio.currentTime = 0
      audio.play()
    }
    setTimeout(() => {
      key.classList.remove('playing')
    }, 300)
  })
})
