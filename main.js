const container = document.querySelector('.container')

projects.forEach(pro => {
  var item = document.createElement('div')
  var a = document.createElement('a')
  a.setAttribute('href', pro.url)
  item.classList = [`item item${pro.num}`]

  item.innerHTML = `
  <h3>${pro.num}</h3>
  <h2>${pro.title}</h2>
  <hr/>
  <span>${pro.desc}</span>
  `

  a.innerHTML = item.outerHTML
  container.appendChild(a)
})
