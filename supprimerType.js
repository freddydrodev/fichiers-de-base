const supprimerType = () => {
  selectedPokemon =
    selectedPokemon !== null
      ? { ...selectedPokemon, type: [...selectedPokemon.type] }
      : { type: [] };

  selectedPokemon.type.pop();

  afficherListTypes(selectedPokemon.type);
};
