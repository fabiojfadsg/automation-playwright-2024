# Project Automation Playwright

## Overview

Welcome to the automated testing project! This repository harnesses the power of Playwright to automate end-to-end tests for a modern web application. The primary goal is to ensure seamless functionality across multiple browsers and devices, validating key user interactions and scenarios.

### Key Objectives

- **Robust Testing Suite**: Leveraging Playwright, the project aims to build a comprehensive suite of tests covering critical functionalities of the web application.
- **Cross-Browser Compatibility**: Utilizing BrowserStack, we ensure that the application behaves consistently across various browsers and device configurations.
- **Maintainable and Scalable**: JavaScript is employed to write the tests, ensuring maintainability and scalability as the project evolves.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [GIT](#git)
- [Dependencies](#dependencies)
- [Execution Playwright Dashboard](#execution-playwright-dashboard)

## Features

- **Playwright Integration**: Harnesses Playwright for end-to-end testing. Read more about Playwright [here](https://playwright.dev/docs/intro).
- **JavaScript**: Written in JavaScript to facilitate test automation and maintenance.

## Setup

### Prerequisites

- Node.js installed [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Playwright installed [here](https://www.npmjs.com/package/Playwright)

## **GIT**

1. **Clone the Repository**

   ```bash
   git clone ????????????

## **Dependencies**

1. **Install NPM dependecies**

    ```bash
    cd ?????????
    yarn add
    ```

## **Execution Playwright Dashboard**

- To run the tests, use the following command [here](https://docs.Playwright.io/guides/getting-started/opening-the-app)

- Playwright

  - Using npx

  ```bash
    test_env=$ENV npx playwright test --ui
  ```

  - Open

  - Note the environment in which the tests are running by default today is "hom".
  If it is necessary to run in another environment, open the dashboard with the desired environment:

    - dev
    - hom
    - prd

    Example execution in staging:

    ```bash
    test_env= npx playwright test --grep @TAG --ui
    ```
