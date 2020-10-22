import styled from "styled-components";

export const Container = styled.div`
  border: 0.2rem solid ${({ theme }) => theme.colors.borderGray};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

type ProgressType = {
  percent: number;
};

export const Progress = styled.div<ProgressType>`
  height: 3rem;
  border: ${({ percent, theme }) =>
    percent > 0 ? `1px solid ${theme.colors.darkGray}` : "none"};

  background: ${({ theme }) => theme.colors.cobaltBlue};

  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ percent }) => percent}%;
  transition: width 0.5s;

  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );

  background-size: 50px 50px;
`;

export const Text = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
`;
