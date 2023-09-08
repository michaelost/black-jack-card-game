import { Card } from "src/types/Card";

function calculatePlayerPoints(playerHand: Card[]): number {
  let totalPoints = 0;
  let numAces = 0;

  for (const card of playerHand) {
    const cardValue = card.value;


    if (cardValue[0] === "A") {
      numAces++;
      totalPoints += 11;
    } else if (["K", "Q", "J"].includes(cardValue[0])) {
      totalPoints += 10;
    } else {
      const parsedCardValue = parseInt(cardValue)
      totalPoints += parsedCardValue === 0 ? 10 : parsedCardValue
    }
  }

  while (totalPoints > 21 && numAces > 0) {
    totalPoints -= 10;
    numAces--;
  }

  return totalPoints;
}

interface GameResult {
  winner: "player" | "house" | "tie";
}

function endGame(playerHand: Card[], houseHand: Card[]): GameResult {
  const playerPoints = calculatePlayerPoints(playerHand);
  const housePoints = calculatePlayerPoints(houseHand);
  if (playerPoints > 21) {
    return { winner: "house" };
  } else if (housePoints > 21) {
    return { winner: "player" };
  } else if (playerPoints > housePoints) {
    return { winner: "player" };
  } else if (playerPoints < housePoints) {
    return { winner: "house" };
  } else {
    return { winner: "tie" };
  }
}

export { calculatePlayerPoints, endGame };