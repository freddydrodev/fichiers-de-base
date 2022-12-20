const afficherListTypes = (types) => {
  const temp = document.getElementById("temp_type");
  const type_p = document.getElementById("type_p");

  if (!temp || !type_p) return;

  if (types) {
    // LIST POUR AJOUTER LES CLONES
    const list = [];

    // naviguer a travers la liste existante de pokemon
    // on va generer les template au fur et a mesure
    types.forEach((value, index) => {
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

        input.addEventListener("keyup", (e) => {
          if (
            selectedPokemon &&
            selectedPokemon.type &&
            selectedPokemon.type.length > index
          ) {
            selectedPokemon = {
              ...selectedPokemon,
              type: selectedPokemon.type.map((t, i) =>
                i === index ? e.target.value : t
              ),
            };
          }
        });
      }

      // ajout le clone dans la liste
      list.push(clone);
    });

    // remplacement des elements existants dans la div type_p
    type_p.replaceChildren(...list);
  } else {
    type_p.innerHTML = "";
  }
};
