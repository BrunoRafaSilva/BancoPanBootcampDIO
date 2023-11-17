function converPokemonTypesToHtml(pokemonTypes){
  //.ty.name é o caminho do retorno json
  return pokemonTypes.map((typeSlot) =>`<li class="type">${typeSlot.type.name}</li>` )
}

function convertPokemonToHtml(pokemon) {
  return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
            <ol class="types">
                ${converPokemonTypesToHtml(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  const newHTML = pokemons.map(convertPokemonToHtml).join("");
  pokemonList.innerHTML = newHTML;
});

// Deixar comentado para aprendizado
// pokeApi.getPokemons().then((pokemons) => {
//   const newList = pokemons.map((pokemon) => {
//     return convertPokemonToHtml(pokemon);

//     //return pokemon.name
//   });

//   const newHtml = newList.join("");

//   console.log(newList);
//   console.log(newHtml);

//   pokemonList.innerHTML += newHtml;

//   /*
//   Pode se reduzir a esse trecho de código
//   pokeapi.getPokemons().then((pokemons =[]) =>{
//     pokemonsList.innerHTML += pokemons.map(convertPokemonToHtml).join(1)
//   })
//    */

//   //Iremos gravar todo o retorno dentro de uma lista para adicionar tudo de uma fez e não ficar adicionando um a um.
//   //   const lisItems = [];

//   //   for (num in pokemons) {
//   //     const pokemon = pokemons[num];
//   //     console.log(pokemon);
//   //     lisItems.push(convertPokemonToHtml(pokemon));
//   //   }

//   //   console.log(lisItems);
// });
