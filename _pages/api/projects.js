import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    /*
    {
        name: "",
        description:
          "",
        stack: ["TypeScript", "NextJS"],
        link: "",
        image: "",
        largeImage: "",
      },
    */
    const projects = [
      {
        name: "kirousek.eu: Portfolio",
        description:
          "A portfolio with all my future projects.",
        stack: ["JavaScript", "NextJS"],
        link: "https://kirousek.eu",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET allowed" });
  }
}
