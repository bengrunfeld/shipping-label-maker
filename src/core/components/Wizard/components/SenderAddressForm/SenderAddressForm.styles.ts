import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
`;

export const FullLine = styled.div`
  padding: 1rem 0;
`;

export const SharedLine = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  > * {
    padding: 0 1rem 0 0;
  }
`;
