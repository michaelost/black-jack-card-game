import { useQuery, UseQueryResult } from "react-query";
import DeckOfCardsApiHelper from "src/utils/helpers/DeckOfCardsApiHelper";

async function fetchDeckCount(): Promise<string> {
  const storedDeckId = sessionStorage.getItem("deck_id");

  if (storedDeckId) {
    return storedDeckId;
  } else {
    const response = await DeckOfCardsApiHelper.createNewDeck();

    sessionStorage.setItem("deck_id", response.deck_id);

    return response.deck_id;
  }
}

export function useDeckCount(): UseQueryResult<string> {
  return useQuery("deckCount", fetchDeckCount);
}

export {};
