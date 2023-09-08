import { useQuery, UseQueryResult } from "react-query";
import DeckOfCardsApiHelper from "src/utils/helpers/DeckOfCardsApiHelper";

interface DeckCountResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}

async function fetchDeckCount(): Promise<string> {
  // Check if 'deck_id' is stored in sessionStorage
  const storedDeckId = sessionStorage.getItem("deck_id");

  if (storedDeckId) {
    return storedDeckId;
  } else {
    // If not stored, make the API request to create a new deck
    const response = await DeckOfCardsApiHelper.createNewDeck();

    // Store the 'deck_id' in sessionStorage for future use
    sessionStorage.setItem("deck_id", response.deck_id);

    return response.deck_id;
  }
}

export function useDeckCount(): UseQueryResult<string> {
  return useQuery("deckCount", fetchDeckCount);
}

export {};
