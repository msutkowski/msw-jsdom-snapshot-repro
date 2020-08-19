## Overview

This is an example for demonstrating configuration of [jsdom-screenshot](https://github.com/dferber90/jsdom-screenshot) with [msw](https://mswjs.io/).

### Key findings
In order for these systems to work together, you must _currently_ pass in `pipe: false` to the `launch` options of `generateSnapshot()`. This will force pupeteer to use a pipe instead of a WebSocket.

### Misc
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
