import { privateHttpRequestHandler } from "modules";
import { httpRequestMethods } from "enums";


export const get = async () => {
  const response = await privateHttpRequestHandler({
    method: httpRequestMethods.GET,
    url: `${process.env.REACT_APP_API_URI}/projects`,
  });

  return response;
};

export const create = async ({ name }) => {
  const response = await privateHttpRequestHandler({
    method: httpRequestMethods.POST,
    url: `${process.env.REACT_APP_API_URI}/projects`,
    body: { name }
  });

  return response;
}
