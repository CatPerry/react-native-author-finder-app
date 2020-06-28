# React Native & Typescript App, to find fake authors you love in a flash

An app built in Typescript and React Native that hits an Express backend that renders fake author info.

Things to pay attention to: component structure and overall architecture, Typescript benefits, Markdown display, and attention to styling.

Designed for an enjoyable user experience and quick access to much-needed info.

![App Screenshot in iOS]('https://repository-images.githubusercontent.com/274006878/5a783580-b8aa-11ea-852e-950c89bce9d7')

## 1. To Run the Client Side of the App

`expo start`

## 2. To Run Server Side

open the `/api` folder (not part of this repo) and run:

`npm start`

^ To avoid this 2-step process, I prefer installing the package `npm-run-all` one level up, which is how I run it, then set scripts like this and just run `npm start` from one level up:

```json
// app/package.json
  "scripts": {
    "start": "run-p client server",
    "client": "cd native && expo start",
    "server": "cd api && npm start"
  }
```

^ But without that access, just follow steps 1 and 2

## TODO

- If you're using React Hooks that set state, your jest tests may throw a warning about not being resolved/wrapped in [`act()`](https://reactjs.org/docs/test-utils.html) while still actually passing. That's the case here. I have to fix this.

- More tests! That test true user flow. Also make tests `.ts` files.
