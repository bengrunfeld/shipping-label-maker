import React from "react";
import { Container, NavButton } from "./FormNavButtons.styles";

type PropsType = {
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  validateForm?: any;
  setWizardContext: any;
  values?: any;
  wizardContextTarget?: string;
  onComplete?: () => void;
};

const FormNavButtons = ({
  onComplete,
  setFormStep,
  setWizardContext,
  step,
  totalSteps,
  validateForm,
  values,
  wizardContextTarget,
}: PropsType) => {
  return (
    <Container role="navigation">
      <NavButton
        type="submit"
        onClick={() => {
          if (step !== totalSteps)
            setWizardContext({
              type: wizardContextTarget,
              payload: values,
            });

          if (step - 1 < 0) return;
          setFormStep(step - 1);
        }}
      >
        Previous
      </NavButton>

      {step !== totalSteps && (
        <NavButton
          type="submit"
          onClick={async () => {
            const result = await validateForm();
            const numErrors = Object.keys(result).length;
            if (numErrors > 0) return;

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
      )}

      {step === totalSteps && (
        <NavButton
          confirm={true}
          onClick={async () => {
            // As per instructions, call onComplete on Confirm
            if (onComplete) {
              onComplete();
            }
            alert("Form submitted. onComplete called.");
          }}
        >
          Confirm
        </NavButton>
      )}
    </Container>
  );
};

export default FormNavButtons;
