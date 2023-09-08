import { useQuery, UseQueryResult } from "react-query";
import DeckOfCardsApiHelper from "src/utils/helpers/DeckOfCardsApiHelper";
import { DrawResponse } from "src/types/Response";

async function fetchDrawCard(
  deckId: string,
  count: number,
): Promise<DrawResponse> {
  const response = await DeckOfCardsApiHelper.drawACard(count, deckId);
  return response;
}

export function useDrawACard(
  deckId: string,
  count: number,
  onSuccess?: (resp: DrawResponse) => void,
): UseQueryResult<DrawResponse> {
  return useQuery(
    ["drawCard", deckId, count],
    () => fetchDrawCard(deckId, count),
    { enabled: false, onSuccess },
  );
}
