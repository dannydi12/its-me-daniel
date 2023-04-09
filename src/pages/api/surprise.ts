import { DateTime } from "luxon";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(404).end();
    return;
  }

  const currentTimePST = DateTime.now().setZone("America/Los_Angeles").hour;

  // Notify me on my phone through IFTTT in case I'm not home
  await fetch(
    `https://maker.ifttt.com/trigger/scare_daniel/with/key/${process.env.IFTTT_SECRET}`,
    {
      method: "POST",
    }
  );

  // Make sure its between 8am and 10pm PST... I like my sleep
  const isWakingHours = currentTimePST >= 8 && currentTimePST <= 22;
  if (!isWakingHours) {
    return;
  }

  try {
    fetch(process.env.LED_URL as string, {
      method: "PUT",
      headers: {
        Authorization: process.env.LED_API_KEY as string,
        "Content-Security-Policy": "upgrade-insecure-requests",
      },
    });
  } catch {}

  res.status(200).end();
};

export default handler;
