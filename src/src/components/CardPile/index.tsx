import { Card } from "src/types/Card";
import DeckCard from "../DeckCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardPile = ({
  cards,
  title,
  isHouse = false,
}: {
  cards: Card[];
  title: string;
  isHouse: boolean;
}) => {
  return (
    <div>
      {cards.length ? <h2>{title}</h2> : null}
      <Container>
        {cards.map((card, index) => (
          <DeckCard key={index} card={card} backSide={isHouse && index === 0} />
        ))}
      </Container>
    </div>
  );
};

export default CardPile;
