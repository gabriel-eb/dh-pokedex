console.log('Hola')

window.addEventListener('load', () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(res => res.json())
    .then(res => {
      res.results.map(pokemon => populatePokelist(pokemon))
    })
})

function populatePokelist(pokemon) {

  const listElement = document.createElement('li')
  listElement.innerHTML = `<a href="#${pokemon.name}">${pokemon.name}</a>`
  const pokeList = document.querySelector('ul#pokelist')
  pokeList.appendChild(listElement)

}