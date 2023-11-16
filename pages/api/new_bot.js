const sdk = require("api")("@recallai/v1.8#5h5i2ulos5m8kr");

export default function botHandler(req, res) {
  const { method } = req;

  const body = JSON.parse(req.body);
  if (!body.meeting_url) {
    res.status(422).send("No meeting provided");
    return;
  }

  if (!body.bot) {
    res.status(422).send("No bot name provided");
    return;
  }

  switch (method) {
    case "POST":
      try {
        sdk.auth(`Token ${process.env.RECALL_API_TOKEN}`);
        sdk.bot_create({
          meeting_url: body.meeting_url,
          bot_name: body.bot,
          transcription_options: {
            // These keys or options can be swapped out here per https://recallai.readme.io/reference/bot_create
            provider: "deepgram",
            deepgram: {
              utterances: true,
            },
          },
        });
        res.send("Success");
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error creating bot" });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
