// creer la fonction de selection
const selectPokemon = (id) => {
  // recuperer la donnee relative au pokemon
  const pokemon = pokemons.find((pok) => pok.id === id);

  console.log(pokemons);

  // si la donnee est introuvable on stop le code
  if (pokemon === undefined) return;

  // set the general selected to pokemon
  selectedPokemon = pokemon;

  // on recupere chaque champ et template a utiliser
  const nom_en = document.getElementById("nom_en");
  const nom_fr = document.getElementById("nom_fr");
  const attaque = document.getElementById("attaque");
  const defense = document.getElementById("defense");
  const temp = document.getElementById("temp_type");
  const type_p = document.getElementById("type_p");

  // on a verifier que les elements html existent avant de continuer
  if (nom_en && nom_fr && attaque && defense && temp && type_p) {
    // assigner les donnees de apres le clique
    nom_en.value = pokemon.name.english;
    nom_fr.value = pokemon.name.french;
    attaque.value = pokemon.base.Attack;
    defense.value = pokemon.base.Defense;

    if (pokemon.type) {
      // LIST POUR AJOUTER LES CLONES
      const list = [];

      // naviguer a travers la liste existante de pokemon
      // on va generer les template au fur et a mesure
      pokemon.type.forEach((value, index) => {
        // creation du clone en deep
        const clone = temp.content.cloneNode(true);

        // recupere le label du clone
        const label = clone.querySelector("label");

        // recupere l'input du clone
        const input = clone.querySelector("input");

        // si le label existe on met a jour son nom
        if (label) {
          label.innerHTML = "Type " + (index + 1);
        }

        // si l'input existe on met a jour sa valeur
        if (input) {
          input.value = value;
        }

        // ajout le clone dans la liste
        list.push(clone);
      });

      // remplacement des elements existants dans la div type_p
      type_p.replaceChildren(...list);
    } else {
      type_p.innerHTML = "";
    }
  }
};
