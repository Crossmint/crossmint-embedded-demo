This is a Crossmint demo project that you can build using following the quickstart guide:
https://docs.crossmint.com/nft-checkout/embedded/quickstart

Built with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To skip the walkthrough and get this app running immediately you can clone the repo and run locally. If you want to build it step by step (< 10 min), follow the [quickstart guide](https://docs.crossmint.com/nft-checkout/embedded/quickstart) instead.

```bash
# copy the repo to your local machine
git clone git@github.com:Crossmint/crossmint-embedded-demo.git

# change into the directory
cd crossmint-embedded-demo

# install dependencies / yarn or npm obviously work too xD
pnpm install
```

You'll also need to create an `.env.local` file, which you can do by by copying `env.sample` to `.env.local` and adding the values from your Crossmint staging or production collection.

You can also use the `projectId` and `collectionId` values here to test things out right away.

> [!NOTE]  
> The Crossmint `projectId` and `collectionId` values are **not** sensitive and can be exposed.

```shell
NEXT_PUBLIC_PROJECT_ID="42c43e55-f92d-4b25-bc99-d8309b6e1f38"
NEXT_PUBLIC_COLLECTION_ID="c42568b5-3edb-4627-87bb-c7408fd747fb"
NEXT_PUBLIC_ENVIRONMENT="staging"
```

Once you have the environment file setup you can run the app locally to test it out.

```bash
# run the app locally and open in your browser
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- Checkout the Crossmint [NFT Checkout Embeddedd docs](https://docs.crossmint.com/nft-checkout/embedded/overview)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
