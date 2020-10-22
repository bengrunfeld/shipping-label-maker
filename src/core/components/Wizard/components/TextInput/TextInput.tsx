import React from "react";
import { useField } from "formik";
import {
  Container,
  InputContainer,
  ErrorMessage,
  InputField,
  FieldLabel,
} from "./TextInput.styles";

interface PropsType {
  [x: string]: any;
  name: string;
  fullLine?: boolean;
}

const Input = ({ label, fullLine, ...props }: PropsType) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta, helpers] = useField(props);

  return (
    <Container>
      <InputContainer fullLine={fullLine}>
        <FieldLabel htmlFor={props.id || props.name}>{label}:</FieldLabel>

        <InputField {...field} {...props} />
      </InputContainer>

      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Container>
  );
};

export default Input;
