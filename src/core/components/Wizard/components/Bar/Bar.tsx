import React from "react";
import { Container, Progress, Text } from "./Bar.styles";

type PropsType = {
  percent: number;
};

const Bar = ({ percent }: PropsType) => (
  <Container>
    <Progress percent={percent}>
      <Text>{percent > 0 ? `${percent}%` : ""}</Text>
    </Progress>
  </Container>
);

export default Bar;
