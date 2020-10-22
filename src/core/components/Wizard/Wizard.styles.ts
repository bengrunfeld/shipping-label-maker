import styled from "styled-components";

export const Container = styled.section`
  border: 0.2rem solid ${({ theme }) => theme.colors.black};
  padding: 2rem;
  width: 90%;

  > * {
    margin-bottom: 2rem;
  }

  > :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    width: ${({ theme }) => theme.size.contentWidth};
  }
`;

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 3rem;
`;
