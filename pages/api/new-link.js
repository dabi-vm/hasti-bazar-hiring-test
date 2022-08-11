// /api/new-link
// POST /api/new-link

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    agent.Links.postLink(data).then(() =>
      res.status(201).json({ message: "Link Added" })
    );
  }
}
