import React from "react";
import styled from "styled-components";

type WinnerProps = {
  winner: "player" | "house" | "tie";
};

const WinnerInfo = styled.div<WinnerProps>`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.winner[props.winner] || "black"};
`;

const winnerMessages: Record<WinnerProps["winner"], string> = {
  player: "Player wins!",
  house: "House wins!",
  tie: "It's a tie!",
};

const WinInfo: React.FC<WinnerProps> = ({ winner }) => {
  const message = winnerMessages[winner] || "No result";

  return <WinnerInfo winner={winner}>{message}</WinnerInfo>;
};

export default WinInfo;
