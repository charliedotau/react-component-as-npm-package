# Intro

This repo demonstrates how to package-up a `React Component` as an `npm package`.  

This repo is entirely informed by this [wonderful DailyJS article](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220).

This demo skips the first workflow discussed in the article.

## Installation

The package isn't published to the `npm repo`. It can be installed directly from Github like so

`npm install --save charliedotau/react-component-as-npm-package#master`

## Usage

`import SomeName from "test-react-component"`

Somewhere in your JSX:
`<SomeName />`

