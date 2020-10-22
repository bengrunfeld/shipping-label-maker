import React from "react";
import { Formik, Form } from "formik";

import { WizardContextType } from "../../Wizard";
import { TextInput, FormNavButtons } from "../";

import schema from "./validation";

import {
  Container,
  Title,
  FullLine,
  SharedLine,
} from "./SenderAddressForm.styles";

type PropsType = {
  shippingData: WizardContextType;
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  setWizardContext: any;
};

const SenderAddressForm = ({
  step,
  setFormStep,
  totalSteps,
  shippingData,
  setWizardContext,
}: PropsType) => {
  return (
    <Container>
      <Title>Enter the senders address:</Title>
      <Formik
        initialValues={{
          name: shippingData.from.name,
          street: shippingData.from.street,
          city: shippingData.from.city,
          state: shippingData.from.state,
          zip: shippingData.from.zip,
        }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("=> submitted:", values);
          setSubmitting(false);
        }}
      >
        {({ validateForm, values }) => (
          <Form>
            <FullLine>
              <TextInput
                fullLine={true}
                label="Name"
                name="name"
                type="text"
                placeholder=""
              />
            </FullLine>

            <FullLine>
              <TextInput
                fullLine={true}
                label="Street"
                name="street"
                type="text"
                placeholder=""
              />
            </FullLine>

            <SharedLine>
              <TextInput label="City" name="city" type="text" placeholder="" />
              <TextInput
                label="State"
                name="state"
                type="text"
                placeholder=""
              />
              <TextInput label="Zip" name="zip" type="text" placeholder="" />
            </SharedLine>

            <FormNavButtons
              step={step}
              setFormStep={setFormStep}
              totalSteps={totalSteps}
              validateForm={validateForm}
              setWizardContext={setWizardContext}
              values={values}
              wizardContextTarget="from"
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SenderAddressForm;
