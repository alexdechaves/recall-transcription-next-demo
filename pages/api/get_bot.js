const sdk = require("api")("@recallai/v1.8#5h5i2ulos5m8kr");

export default function botHandler(req, res) {
  const { method, query } = req;

  if (!query.id) {
    res.status(422).send("No Id provided");
    return;
  }

  switch (method) {
    case "GET":
      try {
        sdk.auth(`Token ${process.env.RECALL_API_TOKEN}`);
        sdk
          .bot_retrieve({ id: query.id })
          .then(({ data }) => res.status(200).json(data));
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error receiving bot" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
