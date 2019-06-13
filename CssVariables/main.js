const inputs = Array.from(document.querySelectorAll('label input'))
const border = document.querySelector('label select')
const imgurl = document.querySelector('#image-url')
const imgsubmit = document.querySelector('#imagesubmit')

imgsubmit.addEventListener('click', () => {
  document.getElementById('hero').src = imgurl.value
})

function handleUpdate() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix,
  )
  if (this.type === 'checkbox') {
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.checked ? 1 : 0,;
    )
    console.log(`--${this.name}`)
  }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

border.addEventListener('change', () => {
  document.documentElement.style.setProperty(`--${border.name}`, border.value)
})
