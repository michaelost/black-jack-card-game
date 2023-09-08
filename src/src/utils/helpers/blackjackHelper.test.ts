import { calculatePlayerPoints, endGame } from "./blackjackHelper";
import { Card, CardValue, CardSuit } from "../../types/Card.d"; // Import the Card type and enums

describe("calculatePlayerPoints", () => {
  it("calculates points correctly for a hand with numeric cards", () => {
    const playerHand: Card[] = [
      {
        code: "2C",
        value: CardValue.TWO,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "4D",
        value: CardValue.FOUR,
        suit: CardSuit.DIAMONDS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = calculatePlayerPoints(playerHand);
    expect(result).toBe(6);
  });

  it("calculates points correctly for a hand with face cards and Ace", () => {
    const playerHand: Card[] = [
      {
        code: "JC",
        value: CardValue.JACK,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "AD",
        value: CardValue.ACE,
        suit: CardSuit.DIAMONDS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = calculatePlayerPoints(playerHand);
    expect(result).toBe(21);
  });

  it("handles Ace as 11 points when it doesn't bust the hand", () => {
    const playerHand: Card[] = [
      {
        code: "2H",
        value: CardValue.TWO,
        suit: CardSuit.HEARTS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "AD",
        value: CardValue.ACE,
        suit: CardSuit.DIAMONDS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "5S",
        value: CardValue.FIVE,
        suit: CardSuit.SPADES,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = calculatePlayerPoints(playerHand);
    expect(result).toBe(18);
  });

  it("handles Ace as 1 point when it busts the hand", () => {
    const playerHand: Card[] = [
      {
        code: "QD",
        value: CardValue.QUEEN,
        suit: CardSuit.DIAMONDS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "AS",
        value: CardValue.ACE,
        suit: CardSuit.SPADES,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "10C",
        value: CardValue.TEN,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = calculatePlayerPoints(playerHand);
    expect(result).toBe(21);
  });

  it("calculates points correctly for a hand with no Ace", () => {
    const playerHand: Card[] = [
      {
        code: "5H",
        value: CardValue.FIVE,
        suit: CardSuit.HEARTS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "7C",
        value: CardValue.SEVEN,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = calculatePlayerPoints(playerHand);
    expect(result).toBe(12);
  });
});

describe("endGame", () => {
  it("correctly determines player as the winner", () => {
    const playerHand: Card[] = [
      {
        code: "9H",
        value: CardValue.NINE,
        suit: CardSuit.HEARTS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "7S",
        value: CardValue.SEVEN,
        suit: CardSuit.SPADES,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const houseHand: Card[] = [
      {
        code: "5D",
        value: CardValue.FIVE,
        suit: CardSuit.DIAMONDS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "8C",
        value: CardValue.EIGHT,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = endGame(playerHand, houseHand);
    expect(result.winner).toBe("player");
  });

  it("correctly determines house as the winner", () => {
    const playerHand: Card[] = [
      {
        code: "KS",
        value: CardValue.KING,
        suit: CardSuit.SPADES,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "8D",
        value: CardValue.EIGHT,
        suit: CardSuit.DIAMONDS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const houseHand: Card[] = [
      {
        code: "QH",
        value: CardValue.QUEEN,
        suit: CardSuit.HEARTS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "9C",
        value: CardValue.NINE,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = endGame(playerHand, houseHand);
    expect(result.winner).toBe("house");
  });

  it("correctly determines a tie", () => {
    const playerHand: Card[] = [
      {
        code: "JC",
        value: CardValue.JACK,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "2S",
        value: CardValue.TWO,
        suit: CardSuit.SPADES,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const houseHand: Card[] = [
      {
        code: "QD",
        value: CardValue.QUEEN,
        suit: CardSuit.DIAMONDS,
        image: "",
        images: { svg: "", png: "" },
      },
      {
        code: "2C",
        value: CardValue.TWO,
        suit: CardSuit.CLUBS,
        image: "",
        images: { svg: "", png: "" },
      },
    ];
    const result = endGame(playerHand, houseHand);
    expect(result.winner).toBe("tie");
  });
});
