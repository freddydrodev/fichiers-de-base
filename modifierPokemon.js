const modifierPokemon = () => {
  // on recupere chaque champ et template a utiliser
  const nom_en = document.getElementById("nom_en");
  const nom_fr = document.getElementById("nom_fr");
  const attaque = document.getElementById("attaque");
  const defense = document.getElementById("defense");
  const type_p = document.getElementById("type_p");

  // on a verifier que les elements html existent avant de continuer
  if (nom_en && nom_fr && attaque && defense && type_p) {
    const nom_en_value = nom_en.value.trim();
    const nom_fr_value = nom_fr.value.trim();
    const attaque_value = parseInt(attaque.value.trim());
    const defense_value = parseInt(defense.value.trim());

    if (
      !!nom_en_value &&
      !!nom_fr_value &&
      !isNaN(attaque_value) &&
      !isNaN(defense_value)
    ) {
      const exists = pokemons.find((pok) => pok.name.french === nom_fr_value);

      if (exists) {
        pokemons = pokemons.map((pok) => {
          if (pok.name.french !== nom_fr_value) {
            return pok;
          }

          return {
            ...pok,
            ...selectedPokemon,
            name: {
              english: nom_en_value,
              french: nom_fr_value,
            },
            base: {
              ...pok.base,
              ...selectedPokemon.base,
              Attack: attaque_value,
              Defense: defense_value,
            },
          };
        });

        afficherListePokemons();
      } else {
        alert("Ce Pokemon n'existe pas");
      }
    }
  }
};
