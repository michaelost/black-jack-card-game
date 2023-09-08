enum CardValue {
  ACE = "ACE",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  JACK = "JACK",
  QUEEN = "QUEEN",
  KING = "KING",
}

enum CardSuit {
  HEARTS = "HEARTS",
  DIAMONDS = "DIAMONDS",
  CLUBS = "CLUBS",
  SPADES = "SPADES",
}

// Define the Card type
export interface Card {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: CardValue;
  suit: CardSuit;
}

export { CardValue, CardSuit };
