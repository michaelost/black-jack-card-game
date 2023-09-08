interface DeckResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
}

interface DrawResponse {
  success: boolean;
  deck_id: string;
  cards: Card[];
  remaining: number;
}

interface ShuffleDeckResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}

export { DrawResponse, DeckResponse, ShuffleDeckResponse };
