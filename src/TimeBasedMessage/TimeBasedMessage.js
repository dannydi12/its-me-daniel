import React, { useState, useEffect } from 'react';
import moment from 'moment';

function TimeBasedMesage() {
  const [time, updateTime] = useState(moment().format('h:mma'));

  // useEffect(() => {
  //   console.log(time);
  // }, [time]);

  useEffect(() => {
    const interval = setInterval(() => updateTime(moment().format('h:mma')), 1000);
    return () => clearInterval(interval);
  }, []);

  const message = () => {
    const hour = moment().hour();
    const minute = moment().minute();

    switch (true) {
      case (moment().format('h:mm') === '11:11'):
        return (<p>It's {time}, which means I'm probably wishing for it to be 11:12{moment().format('a')}</p>);

      case (hour >= 7 && hour < 9):
        return (<p>It's {time}, which means I'm probably on a hike. Let's walk and talk. &#x26f0;</p>);

      case (hour >= 9 && hour < 17):
        return (<p>It's {time}, which means I'm probably designing a website right now.<br /> Reach out so we can collaborate or just talk code. 	&#x1f4bb;</p>);

      case (hour >= 17 && hour < 20):
        return (<p>It's {time}, which means I'm probably thinking about how I can help get humanity to Mars. Want to help? &#x1f680;</p>);

      case (hour >= 20 && hour < 22):
        return (<p>It's {time}, which means I'm probably making music. Reach out so we can jam. Or talk code. Or both? &#x1f3b6;</p>);

      case (hour >= 22 && minute <= 30):
        return (<p>It's {time}, which means I'm probably watching Rick and Morty. Let's talk in dimension C-137 near the FlimFlorp. &#x1f47e;</p>);

      case (hour >= 22 && hour < 7):
        return (<p>It's {time}, which means I'm probably dreaming about Elon Musk. Is that you Elon? 	&#x1f929;</p>); //If so, use this email: xxxxx

      default:
        return (<p>It's {time}, which means I'm probably designing a website right now.<br /> Reach out so we can collaborate or just talk code. &#x1f4bb;</p>);
    }
  }

  return (
    <>
      {message()}
    </>
  );
}

export default TimeBasedMesage;