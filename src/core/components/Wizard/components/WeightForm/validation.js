import * as Yup from "yup";

const schema = Yup.object({
  weight: Yup.number().required("Required").min(1, "Must be greater than zero"),
});

export default schema;
