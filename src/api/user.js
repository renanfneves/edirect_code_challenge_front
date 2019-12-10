import { publicHttpRequestHandler } from "modules";
import { httpRequestMethods } from "enums";

export const create = async ({ name, username, password } = {}) => {
  const response = await publicHttpRequestHandler({
    method: httpRequestMethods.POST,
    url: `${process.env.REACT_APP_API_URI}/users`,
    body: { name, username, password },
  });

  return response;
};
