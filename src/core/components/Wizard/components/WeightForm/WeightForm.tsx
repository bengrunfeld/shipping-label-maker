import React from "react";
import { Formik, Form } from "formik";

import { WizardContextType } from "../../Wizard";
import { TextInput, FormNavButtons } from "../";

import schema from "./validation";

import { Container, Title, FullLine } from "./WeightForm.styles";

type PropsType = {
  shippingData: WizardContextType;
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  setWizardContext: any;
};

const WeightForm = ({
  step,
  setFormStep,
  totalSteps,
  shippingData,
  setWizardContext,
}: PropsType) => {
  return (
    <Container>
      <Title>Enter the shipping weight:</Title>
      <Formik
        initialValues={{
          weight: shippingData.weight,
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
                label="Weight"
                name="weight"
                type="number"
                placeholder={shippingData.weight}
              />
            </FullLine>

            <FormNavButtons
              step={step}
              setFormStep={setFormStep}
              totalSteps={totalSteps}
              validateForm={validateForm}
              setWizardContext={setWizardContext}
              values={values.weight}
              wizardContextTarget="weight"
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default WeightForm;
