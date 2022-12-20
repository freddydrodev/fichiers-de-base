/**
 * creation de la fonction afficherListePokemons
 */
const afficherListePokemons = () => {
  // recuperer la div qui doit contenir la liste des pokemons
  const pokemonListDiv = document.getElementById("list-pokemons");

  // on sassure que la div existe sinon on stop le code
  if (pokemonListDiv === null) return;

  // creer une liste vide dans le but de stocker les pokemon
  const pokemonsList = [];

  // on navigue a travers la liste de pokemon existante
  pokemons.forEach((pokemon) => {
    // on assigne les pokemon a larray vide creer au paravant
    // on creer aussi une fonction "selectPokemon" pour
    // selectionner un pokemon grace a son id
    pokemonsList.push(
      `
<li>
    <button onclick="selectPokemon(${pokemon.id})" style="width:100%;">
        ${pokemon.name.french}
    </button>
</li>`
    );
  });

  // converti l'array en string grace a join et un separateur vide
  // et on affiche les li grace a innerHTML
  pokemonListDiv.innerHTML = pokemonsList.join("");
};
