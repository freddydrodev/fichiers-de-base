const ajouterType = () => {
  selectedPokemon =
    selectedPokemon !== null
      ? { ...selectedPokemon, type: [...selectedPokemon.type] }
      : { type: [] };

  selectedPokemon.type.push("");

  afficherListTypes(selectedPokemon.type);
};
