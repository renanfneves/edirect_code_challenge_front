import * as Yup from "yup";
import { errorMessages } from "enums";

export default Yup.object().shape({
  username: Yup.string()
    .email(errorMessages.InvalidMail)
    .required(errorMessages.RequiredField),
  password: Yup.string().required(errorMessages.RequiredField),
});
