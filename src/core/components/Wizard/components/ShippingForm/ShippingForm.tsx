import React from "react";

import { WizardContextType } from "../../Wizard";
import {
  SenderAddressForm,
  ReceiverAddressForm,
  WeightForm,
  ShippingOptionForm,
  ConfirmForm,
} from "../";

import { Container } from "./ShippingForm.styles";

type PropsType = {
  shippingData: WizardContextType;
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  setWizardContext: any;
};

const ShippingForm = ({
  shippingData,
  step,
  setFormStep,
  totalSteps,
  setWizardContext,
}: PropsType) => {
  const getForm = (step: number): React.ReactNode => {
    if (step === 0)
      return (
        <SenderAddressForm
          step={step}
          setFormStep={setFormStep}
          totalSteps={totalSteps}
          shippingData={shippingData}
          setWizardContext={setWizardContext}
        />
      );
    if (step === 1)
      return (
        <ReceiverAddressForm
          step={step}
          setFormStep={setFormStep}
          totalSteps={totalSteps}
          shippingData={shippingData}
          setWizardContext={setWizardContext}
        />
      );
    if (step === 2)
      return (
        <WeightForm
          step={step}
          setFormStep={setFormStep}
          totalSteps={totalSteps}
          shippingData={shippingData}
          setWizardContext={setWizardContext}
        />
      );
    if (step === 3) return <ShippingOptionForm />;
    if (step === 4) return <ConfirmForm />;
  };

  return <Container>{getForm(step)}</Container>;
};

export default ShippingForm;
