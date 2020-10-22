import React from "react";
import { Container } from "./ShippingForm.styles";
import { WizardContextType } from "../../Wizard";

type PropsType = {
  shippingData: WizardContextType;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<any>>;
};

const ShippingForm = ({ shippingData, step, setStep }: PropsType) => {
  return <Container></Container>;
};

export default ShippingForm;
