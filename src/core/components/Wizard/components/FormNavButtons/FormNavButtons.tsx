import React from "react";
import { Container, NavButton } from "./FormNavButtons.styles";

type PropsType = {
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  validateForm: any;
  setWizardContext: any;
  values: any;
  wizardContextTarget: string;
};

const FormNavButtons = ({
  totalSteps,
  step,
  setFormStep,
  validateForm,
  setWizardContext,
  values,
  wizardContextTarget,
}: PropsType) => {
  return (
    <Container role="navigation">
      <NavButton
        type="button"
        onClick={() => {
          if (step - 1 < 0) return;
          setFormStep(step - 1);
        }}
      >
        Previous
      </NavButton>
      <NavButton
        type="submit"
        onClick={async () => {
          const result = await validateForm();
          const numErrors = Object.keys(result).length;
          if (numErrors > 0) return;

          console.log(values);

          setWizardContext({
            type: wizardContextTarget,
            payload: values,
          });

          if (step + 1 > totalSteps) return;
          setFormStep(step + 1);
        }}
      >
        Next
      </NavButton>
    </Container>
  );
};

export default FormNavButtons;
