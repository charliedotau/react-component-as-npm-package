# Intro

This repo demonstrates how to package-up a `React Component` as an `npm package`.  

This repo is entirely informed by this [wonderful DailyJS article](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220).

This demo skips the first workflow discussed in the article.

## Test Component

As per the article the test component is highly trivial:

    /*** src/index.js   ***/
    import React from 'react';
    import './styles.css';
    const MyComponent = () => (
        <h1>Hello from My Component</h1>
    );
    export default MyComponent;

## Installation

The package isn't published to the `npm repo`. It can be installed directly from Github like so

`npm install --save charliedotau/react-component-as-npm-package#master`

## Usage

`import SomeName from "test-react-component"`

Somewhere in your JSX:
`<SomeName />`


## References

* [A guide to building a React component with webpack 4, publishing to npm, and deploying the demo to GitHub Pages](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220)

* [Use Github branch as dependency in package.json](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)

