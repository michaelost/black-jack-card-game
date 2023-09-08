import CardPile from '../CardPile'
import Button from 'src/components/ui/Button'
import BlackjackGameContainer from 'src/components/ui/GameContainer';
import ActionsContainer from 'src/components/ui/ActionsContainer';
import WinInfo from 'src/components/WinInfo';
import Spinner from 'src/components/ui/Spinner';
import { useBlackjackGameLogic } from 'src/hooks/useBlackjackGameLogic';

function Deck() {
  const {
    hit,
    stand,
    dealCards,
    winner,
    houseCards,
    playerCards,
    returnCardsLoading,
    shuffleDeckLoading,
    loadingDrawCard,
    loadingHit,
  } = useBlackjackGameLogic()

  return (
    <>
    <BlackjackGameContainer>
    <h1>Blackjack Game</h1>
      <CardPile cards={playerCards} title={'Your hand'} isHouse={false} />
      <CardPile cards={houseCards} title={'House hand'} isHouse={!winner} />
      {winner ? <WinInfo winner={winner} /> : null}
    </BlackjackGameContainer>
    
    <ActionsContainer>
      <Button onClick={dealCards} disabled={loadingDrawCard || returnCardsLoading || shuffleDeckLoading}>
        deal cards
      </Button>
      <Button onClick={hit} disabled={!!winner ||  loadingHit}>
        hit
      </Button>
      <Button onClick={stand} disabled={!!winner}>
        stand
      </Button>

      {(loadingDrawCard || loadingHit) ? <Spinner /> : null}
    </ActionsContainer>
    </>
  );
}

export default Deck;