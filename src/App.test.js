import React from "react";
import { render, waitFor } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";

import { rest } from "msw";
import { setupServer } from "msw/node";
import fetch from "node-fetch";

import App from "./App";

// Just matching the issue per https://github.com/mswjs/msw/issues/268
global.fetch = fetch;

const server = setupServer(
  rest.get("http://test.banana/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello, superbanana" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("should have no visual regressions while rendering the greeting", async () => {
  const { getByTestId } = render(<App />);
  await waitFor(() => getByTestId("greeting"));

  expect(getByTestId("greeting")).toHaveTextContent("hello, superbanana");

  expect(
    await generateImage()
  ).toMatchImageSnapshot();
});
