import nc from "next-connect";
import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

function postHandler(req: NextApiRequest, res: NextApiResponse) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const message = {
    to: "joaop.oliveira1@protonmail.com",
    from: "joaop.oliveira1@pm.me",
    subject: req.body.name,
    text: req.body.message,
  };
  sendgrid
    .send(message)
    .then((response) => res.json({ ok: true, ...response }))
    .catch((error) => res.json({ ok: false, error: error.message }));
}

export default nc<NextApiRequest, NextApiResponse>().post(postHandler);
