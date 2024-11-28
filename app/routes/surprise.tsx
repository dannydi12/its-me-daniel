import { DateTime } from "luxon";
import TelegramBot from "node-telegram-bot-api";
import { Route } from "./+types/surprise";

export async function action({ request }: Route.ActionArgs) {
  // Notify me on my phone through Telegram in case I'm not home
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN as string);
  let metadata = "";

  // follow up with extra user information
  const ip = request.headers.get("x-forwarded-for");
  if (ip) {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: { "Content-Type": "application/json" },
    });

    const userData = await res.json();

    metadata = `${ip}, ${userData.city}, ${userData.region}, ${userData.org}`;
  }

  await bot.sendMessage(
    process.env.TELEGRAM_CHANNEL as string,
    `Someone tried to scare you 👻\nMetadata: ${metadata}`
  );

  // Make sure its between 8am and 10pm PST... I like my sleep
  const currentTimePST = DateTime.now().setZone("America/Los_Angeles").hour;
  const isWakingHours = currentTimePST >= 8 && currentTimePST <= 22;
  if (!isWakingHours) {
    return { success: true };
  }

  if (process.env.LED_URL) {
    try {
      fetch(process.env.LED_URL as string, {
        method: "PUT",
        headers: {
          Authorization: process.env.LED_API_KEY as string,
          "Content-Security-Policy": "upgrade-insecure-requests",
        },
      });
    } catch {
      console.log("Something went wrong.");
    }
  }

  return { success: true };
}
