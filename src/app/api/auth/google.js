import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    console.log(ticket)
    const payload = ticket.getPayload(); // Extract user info
    const { sub, name, email, picture } = payload;

    // TODO: Save user to database if not exists
    res.status(200).json({ id: sub, name, email, picture });
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: "Invalid token" });
  }
}
