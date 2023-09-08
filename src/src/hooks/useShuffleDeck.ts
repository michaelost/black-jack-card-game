import { useQuery, UseQueryResult } from "react-query";
import DeckOfCardsApiHelper from "src/utils/helpers/DeckOfCardsApiHelper";
import { ShuffleDeckResponse } from "src/types/Response";

async function fetchShuffleDeck(
  deckId: string,
  remaining: boolean,
): Promise<ShuffleDeckResponse> {
  const response = await DeckOfCardsApiHelper.reshuffleTheCards(
    deckId,
    remaining,
  );
  return response;
}

export function useShuffleDeck(
  deckId: string,
  remaining = true,
): UseQueryResult<ShuffleDeckResponse> {
  return useQuery(
    ["shuffleDeck", deckId, remaining],
    () => {
      if (!deckId) {
        return null;
      }
      return fetchShuffleDeck(deckId, remaining);
    },
    { enabled: !!deckId },
  );
}
