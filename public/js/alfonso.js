console.log('Hola')

window.addEventListener('load', async () => {

  try{
    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    res = await res.json()
    res.results.map(pokemon => populatePokelist(pokemon))
  }catch(err){
    console.log(err)
  }

})

function populatePokelist(pokemon) {
  const listElement = document.createElement('li')
  listElement.innerHTML = `<a href="#${pokemon.name}">${pokemon.name}</a>`
  listElement.addEventListener('click', () => getDetail(pokemon.url))
  const pokeList = document.querySelector('ul#pokelist')
  pokeList.appendChild(listElement)
}

async function getDetail(url){
  try {
    let pokemon = await fetch(url)
    pokemon = await pokemon.json()
    insertPokemon(pokemon)
  } catch (error) {
    
  }
}

function insertPokemon(detail){
  const divPokemon = document.querySelector('.pokedetail')
  divPokemon.innerHTML = `
              <img src="${detail.sprites.front_default}"/>
              <h2>${detail.name}</h2>
            `
}
