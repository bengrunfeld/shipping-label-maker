import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short - must be more than 3 characters.")
    .max(100, "Too long - must be less than 100 characters."),
  street: Yup.string()
    .required("Required")
    .min(3, "Too short - must be more than 3 characters.")
    .max(100, "Too long - must be less than 100 characters."),
  city: Yup.string()
    .required("Required")
    .min(3, "Too short - must be more than 3 characters.")
    .max(100, "Too long - must be less than 100 characters."),
  state: Yup.string()
    .required("Required")
    .min(2, "Too short - must be more than 3 characters.")
    .max(100, "Too long - must be less than 100 characters."),
  zip: Yup.string()
    .required("Required")
    .min(3, "Too short - must be more than 3 characters.")
    .max(100, "Too long - must be less than 100 characters."),
});

export default schema;
