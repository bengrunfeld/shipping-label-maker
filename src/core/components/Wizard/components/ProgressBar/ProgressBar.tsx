import React from "react";
import { Container, Progress, Text } from "./ProgressBar.styles";

type PropsType = {
  percent: number;
};

const ProgressBar = ({ percent }: PropsType) => (
  <Container>
    <Progress percent={percent}>
      <Text>{percent > 0 ? `${percent}%` : ""}</Text>
    </Progress>
  </Container>
);

export default ProgressBar;
