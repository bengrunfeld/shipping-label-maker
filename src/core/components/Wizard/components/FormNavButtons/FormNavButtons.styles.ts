import styled from "styled-components";

export const Container = styled.nav`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  > :first-child {
    margin-right: 3rem;
  }
`;

type NavButtonType = {
  confirm?: boolean;
};

export const NavButton = styled.button<NavButtonType>`
  border: none;
  background: ${({ theme, confirm }) =>
    confirm ? theme.colors.blue : theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.colors.activeGray};
  }
`;
