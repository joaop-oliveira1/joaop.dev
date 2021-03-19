import { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-expect-error
  const mailgun = new Mailgun(FormData).client({
    username: "api",
    key: "340264701bc93a98da535c370b7946bd-73e57fef-b68f1167",
    public_key: "pubkey-4f235b3e7360c9d0118092261e619b2e",
  });
  if (req.method === "POST") {
    console.log(req.url);
    mailgun.messages
      .create("sandbox273bc3c7401a49ddb4851dd8a24b65fa.mailgun.org", {
        from: req.body.email,
        to: ["joaop.oliveira1@pm.me"],
        subject: "Contact from " + req.body.name,
        text: req.body.message,
      })
      .then((message) => {
        console.log(message);
        res.json({ ok: true });
      })
      .catch((err) => {
        console.log(err);
        res.json({ ok: false });
      });
  }
};
