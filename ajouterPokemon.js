const ajouterPokemon = () => {
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
    const attaque_value = attaque.value.trim();
    const defense_value = defense.value.trim();

    if (
      !!nom_en_value &&
      !!nom_fr_value &&
      !!attaque_value &&
      !!defense_value
    ) {
      const exists = pokemons.find((pok) => pok.name.french === nom_fr_value);

      if (exists) {
        alert("Ce Pokemon existe deja");
      } else {
        let maxId = pokemons.length + 1;

        pokemons.forEach((pok) => {
          if (pok.id >= maxId) {
            maxId = pok.id + 1;
          }
        });

        pokemons.push({
          id: maxId,
          name: {
            english: nom_en_value,
            french: nom_fr_value,
          },
          // type: ["Grass", "Poison"],
          base: {
            // HP: 45,
            Attack: attaque_value,
            Defense: defense_value,
            // "Sp. Attack": 65,
            // "Sp. Defense": 65,
            // Speed: 45,
          },
        });

        afficherListePokemons();
      }
    }
  }
};
