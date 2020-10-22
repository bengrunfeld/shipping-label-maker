import React from "react";

import { WizardContextType } from "../../Wizard";
import { FormNavButtons } from "../";

import {
  Container,
  Title,
  InfoSection,
  SectionTitle,
  Field,
} from "./ConfirmForm.styles";

type PropsType = {
  shippingData: WizardContextType;
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  setWizardContext: any;
  onComplete: () => void;
};

export const calcShippingCost = (
  weight: number,
  shippingOption: number
): number => {
  const shippingRate = 0.4;

  return weight * shippingRate * (shippingOption === 1 ? 1 : 1.5);
};

const ConfirmForm = ({
  step,
  setFormStep,
  totalSteps,
  shippingData,
  setWizardContext,
  onComplete,
}: PropsType) => {
  return (
    <Container>
      <Title>Please review and confirm if the information is correct:</Title>

      <InfoSection>
        <SectionTitle>From:</SectionTitle>
        <Field>Name: {shippingData.from.name}</Field>
        <Field>Street: {shippingData.from.street}</Field>
        <Field>City: {shippingData.from.city}</Field>
        <Field>State: {shippingData.from.state}</Field>
        <Field>Zip: {shippingData.from.zip}</Field>
      </InfoSection>

      <InfoSection>
        <SectionTitle>To:</SectionTitle>
        <Field>Name: {shippingData.to.name}</Field>
        <Field>Street: {shippingData.to.street}</Field>
        <Field>City: {shippingData.to.city}</Field>
        <Field>State: {shippingData.to.state}</Field>
        <Field>Zip: {shippingData.to.zip}</Field>
      </InfoSection>

      <InfoSection>
        <Field>Weight: {shippingData.weight}</Field>
      </InfoSection>

      <InfoSection>
        <Field>Shipping Option: {shippingData.shippingOption}</Field>
      </InfoSection>

      <InfoSection>
        <SectionTitle>
          Shipping Cost: $
          {calcShippingCost(shippingData.weight, shippingData.shippingOption)}
        </SectionTitle>
      </InfoSection>

      <FormNavButtons
        step={step}
        setFormStep={setFormStep}
        totalSteps={totalSteps}
        setWizardContext={setWizardContext}
        onComplete={onComplete}
      />
    </Container>
  );
};

export default ConfirmForm;
