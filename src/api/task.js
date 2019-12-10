import { privateHttpRequestHandler } from "modules";
import { httpRequestMethods } from "enums";


export const get = async ({ projectId }) => {
  const response = await privateHttpRequestHandler({
    method: httpRequestMethods.GET,
    url: `${process.env.REACT_APP_API_URI}/projects/${projectId}/tasks`,
  });

  return response;
};

export const create = async ({ projectId, name }) => {
  const response = await privateHttpRequestHandler({
    method: httpRequestMethods.POST,
    url: `${process.env.REACT_APP_API_URI}/projects/${projectId}/tasks`,
    body: { name }
  });

  return response;
}

export const update = async ({ projectId, taskId }) => {
  const response = await privateHttpRequestHandler({
    method: httpRequestMethods.PUT,
    url: `${process.env.REACT_APP_API_URI}/projects/${projectId}/tasks/${taskId}`,
  });

  return response;
}

export const remove = async ({ projectId, taskId }) => {
  const response = await privateHttpRequestHandler({
    method: httpRequestMethods.DELETE,
    url: `${process.env.REACT_APP_API_URI}/projects/${projectId}/tasks/${taskId}`,
  });

  return response;
}