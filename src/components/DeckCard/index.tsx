import React from "react";
import { Card } from "src/types/Card";
import styled from "styled-components";

const BlackjackCardBack = styled.div`
  width: 108px;
  height: 150px;
  background-color: #000;
  border: 4px solid #ff0000;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  height: 150px;
`;

const DeckCard = ({
  card,
  backSide = false,
}: {
  card: Card;
  backSide: boolean;
}) => {
  return backSide ? <BlackjackCardBack /> : <Img src={card.image} />;
};

export default DeckCard;
