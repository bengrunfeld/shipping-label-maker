import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./Wizard.styles";
import { ProgressBar, ShippingForm } from "./components";

export type PersonalDetailsType = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type WizardContextType = {
  from: PersonalDetailsType;
  to: PersonalDetailsType;
  weight: number;
  shippingOption: number;
};

type ActionType = {
  prev: number;
  next: number;
  end: boolean;
};

export type StepsType = {
  wizardContext: WizardContextType;
  onAction: (action: ActionType) => void;
};

export type WizardType = {
  header: string;
  steps: StepsType;
  wizardContext: WizardContextType;
  onComplete: () => void;
  setWizardContext: any;
};

const Wizard = ({
  header,
  steps,
  wizardContext,
  onComplete,
  setWizardContext,
}: WizardType) => {
  const [percentComplete, setPercentComplete] = useState(0);
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  const setFormStep = (latestStep: number): void => {
    setPercentComplete(Math.floor((latestStep / totalSteps) * 100));
    setStep(latestStep);
  };

  return (
    <Container>
      <Title>{header}</Title>
      <ProgressBar percent={percentComplete} />
      <ShippingForm
        step={step}
        setFormStep={setFormStep}
        shippingData={wizardContext}
        totalSteps={totalSteps}
        setWizardContext={setWizardContext}
        onComplete={onComplete}
      />
    </Container>
  );
};

Wizard.propTypes = {
  header: PropTypes.string.isRequired,
  steps: PropTypes.object.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Wizard;
