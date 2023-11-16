This is a [Next.js](https://nextjs.org/) project to be used as a starter application for using the Recall API + Deepgram (transcription) + Zoom.

## Configuration

In this example, we'll be using Zoom with the Recall API

### Step 1. Create Recall API Token

Create an API Key in the [Recall dashboard](https://api.recall.ai/dashboard/apikeys/). This will be used for API authentication.

### Step 2. Create SDK Zoom credentials

Head to https://recallai.readme.io/reference/how-to-create-zoom-sdk-credentials to see how to create the needed Zoom SDK Token and Secret

### Step 3. Create a Deepgram API token

Deepgram is used in this demo to transcribe meeting audio so we'll need to create an API token and input it [here](https://api.recall.ai/dashboard/platforms/deepgram) in the Recall Dashboard. Instructions for creating a Deepgram API key are [here](https://developers.deepgram.com/docs/authenticating).

### Step 4. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then, input your Recall API token:

- `RECALL_API_TOKEN` should be your new token

## Getting Started

After cloning the repo locally, install the dependencies:

```bash
npm install
# or
yarn install
```

Then spin up your dev server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Using the Demo

### Create a new bot

1. Start a zoom meeting
2. On the Recall Demo Home page, select "New bot".
3. Input the Zoom meeting URL (ex. https://us05web.zoom.us/j/*********)
4. Name your bot
5. Hit submit
6. You'll now be able to admit the bot into the meeting

### Seeing the data

1. Talk a little bit to get the transcription running, then end the Zoom meeting
2. Once ended, head to `/sessions/` on the demo
3. Select the meeting you just ended
4. Here you can view the meeting recording as well as the transcription synced with the playhead timeline

## Notes

There's a lot of room here to customize and extend off of this example application. Feel free to change anything necessary after cloning/forking.

- You can change the transcription partner or fine tune the [Deepgram transcription process](https://developers.deepgram.com/api-reference/transcription/#transcribe-live-streaming-audio).
- You can add features such as displaying metadata, offloading the video recording, etc.
- While this is written in Javascript, it can easily be converted to Typescript

## Learn More

### Recall.ai

To learn more about Recall.ai, please head to [Recall.ai](https://www.recall.ai/) and their [Documentation](https://recallai.readme.io/reference/recall-overview).

### Deepgram

Check out Deepgram [here](https://deepgram.com/).

### Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

