# aicommerce

This repository contains a React + TypeScript storefront in `frontend/` and an
Express + TypeScript API in `backend/`.

## Requirements

Install Node.js and npm.

## Install

```sh
npm install
```

## Run locally

Start the storefront:

```sh
npm run dev
```

Start the API in another terminal:

```sh
npm run backend:dev
```

The API listens on port `3000` by default (override with `PORT`) and returns
`Welcome to the aicommerce api.` as plain text from `GET /`.

## Build and type-check

```sh
npm run build
npm run typecheck
```

Start the compiled API with `npm run backend:start`.
