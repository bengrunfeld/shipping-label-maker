import * as Yup from "yup";

const schema = Yup.object({
  shippingOption: Yup.number()
    .required("Required")
    .min(1, "Must be 1 or 2")
    .max(2, "Must be 1 or 2"),
});

export default schema;
