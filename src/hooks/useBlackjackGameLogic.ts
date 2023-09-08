import { useState, useEffect, useCallback } from 'react';
import { useDeckCount } from 'src/hooks/useDeckCount'
import { useReturnCardsToTheDeck } from 'src/hooks/useReturnCardsToTheDeck'
import { useShuffleDeck } from 'src/hooks/useShuffleDeck'
import { Card } from 'src/types/Card.d'
import { DrawResponse } from 'src/types/Response';
import { useDrawACard } from 'src/hooks/useDrawACard';
import { calculatePlayerPoints, endGame } from 'src/utils/helpers/blackjackHelper';

function useReturnAndShuffleDeck(deckId: string) {
  const returnCardsQuery = useReturnCardsToTheDeck(deckId);
  const shuffleDeckQuery = useShuffleDeck(deckId);
  return {
    returnCardsQuery,
    shuffleDeckQuery,
  };
}

type Winner = 'player' | 'house' | 'tie';

function useBlackjackGameLogic() {
  const [deckId, setDeckId] = useState('');
  const [winner, setWinner] = useState<Winner | undefined>(undefined);  

  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [houseCards, setHouseCards] = useState<Card[]>([]);

  const { data: deckData } = useDeckCount();

  const {
    returnCardsQuery,
    shuffleDeckQuery,
  } =  useReturnAndShuffleDeck(deckId)

  useEffect(() => {
    if (deckData) {
      setDeckId(deckData);
    }
  }, [deckData]);

  const drawCallback = useCallback(
    (resp: DrawResponse) => {
      setPlayerCards([resp.cards[0], resp.cards[1]]);
      setHouseCards([resp.cards[2], resp.cards[3]]);
    },
    [setPlayerCards, setHouseCards]
  );

  const hitCallback = useCallback(
    (resp: DrawResponse) => {
      const cards = [...playerCards, resp.cards[0]];
      setPlayerCards(cards);
      if (calculatePlayerPoints(cards) >= 21) {
        const winner = endGame(playerCards, houseCards)
        setWinner(winner.winner)
      }
    },
    [playerCards, setPlayerCards, houseCards, setWinner]
  );

  const stand = useCallback(() => {
    const winner = endGame(playerCards, houseCards)
    setWinner(winner.winner)
  },
    [playerCards, houseCards, setWinner])
  
  const dealCards = async () => {
    setWinner(undefined)
    await returnCardsQuery?.refetch()
    await shuffleDeckQuery?.refetch()
    refetchDrawACard()
  }

  const { isLoading: loadingDrawCard, refetch: refetchDrawACard } = useDrawACard(deckId, 4, drawCallback)

  const { isLoading: loadingHit, refetch: refetchHit } = useDrawACard(deckId, 1, hitCallback)


  const hit = () => {
    refetchHit()
  }

  return {
    hit,
    stand,
    dealCards,
    winner,
    houseCards,
    playerCards,
    returnCardsLoading: returnCardsQuery?.isLoading,
    shuffleDeckLoading: shuffleDeckQuery?.isLoading,
    loadingDrawCard,
    loadingHit,
  }
}

export { useBlackjackGameLogic }