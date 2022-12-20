const supprimerPokemon = () => {
  // on recupere chaque champ et template a utiliser
  const nom_en = document.getElementById("nom_en");
  const nom_fr = document.getElementById("nom_fr");
  const attaque = document.getElementById("attaque");
  const defense = document.getElementById("defense");
  const type_p = document.getElementById("type_p");

  // on a verifier que les elements html existent avant de continuer
  if (nom_en && nom_fr && attaque && defense && type_p) {
    const nom_fr_value = nom_fr.value.trim();

    if (!!nom_fr_value) {
      const exists = pokemons.find((pok) => pok.name.french === nom_fr_value);

      if (exists) {
        pokemons = pokemons.filter((pok) => pok.name.french !== nom_fr_value);

        nom_en.value = "";
        nom_fr.value = "";
        attaque.value = "";
        defense.value = "";

        type_p.innerHTML = "";

        afficherListePokemons();
      } else {
        alert("Ce Pokemon n'existe pas ");
      }
    }
  }
};
