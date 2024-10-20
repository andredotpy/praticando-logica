function alterarStatus(gameId) {
  let game = document.getElementById(`game-${gameId}`);
  let gameImage = game.querySelector(".dashboard__item__img");
  let gameButton = game.querySelector(".dashboard__item__button");
  let gameIsRented = gameImage.classList.contains(
    "dashboard__item__img--rented"
  );
  if (gameIsRented) {
    if (confirm("Tem certeza?") == true) {
      gameImage.classList.remove("dashboard__item__img--rented");
      gameButton.classList.remove("dashboard__item__button--return");
      gameButton.innerHTML = "Alugar";
    }
  } else {
    gameImage.classList.add("dashboard__item__img--rented");
    gameButton.classList.add("dashboard__item__button--return");
    gameButton.innerHTML = "Devolver";
  }
}
