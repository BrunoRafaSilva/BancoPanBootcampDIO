function convertPokemonToHtml(pokemon) {
  return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons) => {
  const newList = pokemons.map((pokemon) => {
    return convertPokemonToHtml(pokemon);

    //return pokemon.name
  });

  const newHtml = newList.join("");

  console.log(newList);
  console.log(newHtml);

  pokemonList.innerHTML += newHtml;

  /* 
  Pode se reduzir a esse trecho de código
  pokeapi.getPokemons().then((pokemons =[]) =>{
    pokemonsList.innerHTML += pokemons.map(convertPokemonToHtml).join(1)
  })
   */

  //Iremos gravar todo o retorno dentro de uma lista para adicionar tudo de uma fez e não ficar adicionando um a um.
  //   const lisItems = [];

  //   for (num in pokemons) {
  //     const pokemon = pokemons[num];
  //     console.log(pokemon);
  //     lisItems.push(convertPokemonToHtml(pokemon));
  //   }

  //   console.log(lisItems);
});
