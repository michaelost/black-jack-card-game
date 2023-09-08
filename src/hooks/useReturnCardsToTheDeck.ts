import { useQuery, UseQueryResult } from "react-query";
import DeckOfCardsApiHelper from "src/utils/helpers/DeckOfCardsApiHelper";

interface ReturnCardsResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
}

async function fetchReturnCardsToTheDeck(
  deckId: string,
): Promise<ReturnCardsResponse> {
  const response = await DeckOfCardsApiHelper.returnCardsToTheDeck(deckId);
  return response;
}

export function useReturnCardsToTheDeck(
  deckId: string,
): UseQueryResult<ReturnCardsResponse> | null {
  return useQuery(
    ["returnCardsToTheDeck", deckId],
    async () => {
      if (!deckId) {
        return null;
      }
      return fetchReturnCardsToTheDeck(deckId);
    },
    { enabled: !!deckId },
  );
}
