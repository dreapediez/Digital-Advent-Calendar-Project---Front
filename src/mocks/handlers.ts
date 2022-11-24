import { rest } from "msw";
import apiMock from "./apiMock";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/users/register`, (request, response, context) => {
    return response.once(context.status(404));
  }),

  rest.post(`${apiUrl}/users/register`, (request, response, context) => {
    return response(context.status(200), context.json({ user: apiMock }));
  }),
];
