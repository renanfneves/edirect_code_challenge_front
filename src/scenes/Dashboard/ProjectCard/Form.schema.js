import * as Yup from "yup";
import { errorMessages } from "enums";

export default Yup.object().shape({
  name: Yup.string().required(errorMessages.RequiredField),
});
