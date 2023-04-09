import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

function TimeBasedMesage() {
  const [time, updateTime] = useState(
    DateTime.now().setZone("America/Los_Angeles").toFormat("h:mma")
  );

  useEffect(() => {
    const interval = setInterval(
      () =>
        updateTime(
          DateTime.now().setZone("America/Los_Angeles").toFormat("h:mma")
        ),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  const message = () => {
    const hour = DateTime.now().setZone("America/Los_Angeles").hour;
    const minute = DateTime.now().setZone("America/Los_Angeles").minute;

    switch (true) {
      case DateTime.now().setZone("America/Los_Angeles").toFormat("h:mm") ===
        "11:11":
        return (
          <p>
            It's {time} PST, which means I'm probably wishing for it to be 11:12
            {DateTime.now().setZone("America/Los_Angeles").toFormat("a")}
          </p>
        );

      case hour >= 7 && hour < 9:
        return (
          <p>
            It's {time} PST, which means I'm probably on a hike. Let's walk and
            talk
            <span role="img" aria-label="mountain">
              &#x26f0;
            </span>
          </p>
        );

      case hour >= 9 && hour < 17:
        return (
          <p>
            It's {time} PST, which means I'm probably designing a website right
            now.
            <br /> Reach out so we can collaborate or just talk code
            <span role="img" aria-label="computer">
              &#x1f4bb;
            </span>
          </p>
        );

      case hour >= 17 && hour < 20:
        return (
          <p>
            It's {time} PST, which means I'm probably thinking about how I can
            help get humanity to Mars. Want to help?
            <span role="img" aria-label="rocket">
              &#x1f680;
            </span>
          </p>
        );

      case hour >= 20 && hour < 22:
        return (
          <p>
            It's {time} PST, which means I'm probably making music. Reach out so
            we can jam. Or talk code. Or both?
            <span role="img" aria-label="music">
              &#x1f3b6;
            </span>
          </p>
        );

      case hour === 22 && minute <= 30:
        return (
          <p>
            It's {time} PST, which means I'm probably watching Rick and Morty.
            Let's talk in dimension C-137 near the FlimFlorp
            <span role="img" aria-label="alien monster">
              &#x1f47e;
            </span>
          </p>
        );

      case hour >= 22 || hour < 7:
        return (
          <p>
            It's {time} PST, which means I'm probably dreaming about Elon Musk.
            Is that you Elon?
            <span role="img" aria-label="star eyes">
              &#x1f929;
            </span>
          </p>
        ); // If so, use this email: xxxxx

      default:
        return (
          <p>
            It's {time} PST, which means I'm probably designing a website right
            now.
            <br /> Reach out so we can collaborate or just talk code
            <span role="img" aria-label="computer">
              &#x1f4bb;
            </span>
          </p>
        );
    }
  };

  return <>{message()}</>;
}

export default TimeBasedMesage;
