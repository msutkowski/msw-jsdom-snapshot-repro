import "@testing-library/jest-dom/extend-expect";

import { toMatchImageSnapshot } from "jest-image-snapshot";
import { setDefaultOptions } from "jsdom-screenshot";

// TravisCI and Linux OS require --no-sandbox to be able to run the tests
// https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-on-travis-ci
setDefaultOptions({
  launch: {
    pipe: true, // Set to `true` to avoid using a WS - https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions
    devtools: true,
    args: process.env.CI === "true" ? ["--no-sandbox"] : [],
  },
  debug: true,
});

// give tests more time as taking screenshots takes a while
jest.setTimeout(50000);

expect.extend({ toMatchImageSnapshot });
