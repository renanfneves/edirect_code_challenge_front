import { publicHttpRequestHandler } from "modules";
import { httpRequestMethods } from "enums";

export const login = async ({ username, password } = {}) => {
  const response = await publicHttpRequestHandler({
    method: httpRequestMethods.POST,
    url: `${process.env.REACT_APP_API_URI}/authenticate`,
    headers: { username, password },
  });

  return response;
};
