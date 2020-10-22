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
} from "./ReceiverAddressForm.styles";

type PropsType = {
  shippingData: WizardContextType;
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  setWizardContext: any;
};

const ReceiverAddressForm = ({
  step,
  setFormStep,
  totalSteps,
  shippingData,
  setWizardContext,
}: PropsType) => {
  return (
    <Container>
      <Title>Enter the receivers address:</Title>
      <Formik
        initialValues={{
          name: shippingData.to.name,
          street: shippingData.to.street,
          city: shippingData.to.city,
          state: shippingData.to.state,
          zip: shippingData.to.zip,
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
              wizardContextTarget="to"
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ReceiverAddressForm;
