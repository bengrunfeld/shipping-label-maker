import styled from "styled-components";

type ContainerProps = {
  fullLine?: boolean;
};

export const Container = styled.div``;

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;

  > input {
    width: 85%;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.errorRed};
  margin-top: 0.25rem;
`;

export const FieldLabel = styled.label`
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0 1rem 0 0;
`;

export const InputField = styled.input`
  &[type="text"] {
    font-size: 1.5rem;
  }

  height: 2.5rem;
`;
