import React from "react";
import s from "./Hero.module.scss";

import BigSlider from "../BigSlider/BigSlider";
import SliderContent from "../SliderContent/SliderContent";
const slides = [
  {
    poster: "/img/main/poster1.webp",
    title: "Avengers : Endgame1",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
  {
    poster: "/img/main/poster2.webp",
    title: "Gravity Falls",
    desc: `The series follows the adventures of Dipper Pines (Jason Ritter) and his twin sister Mabel (Kristen Schaal), who are sent to spend the summer with their great-uncle (or "Grunkle") Stan (Hirsch) in Gravity Falls, Oregon, a mysterious town full of paranormal incidents and supernatural creatures.`,
  },
  {
    poster: "/img/main/poster3.webp",
    title: "Breaking Bad",
    desc: `Walter White (Bryan Cranston), an over-qualified, dispirited high-school chemistry teacher struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime and partners with a former student, Jesse Pinkman (Aaron Paul), to produce and distribute methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld.`,
  },
  {
    poster: "/img/main/poster4.webp",
    title: "Attack on Titan",
    desc: `It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother. `,
  },
];

const Hero = () => {
  return (
    <section id={s.hero} className="section">
      <div className="container">
        <div className={s.hero__inner}>
          <BigSlider
            controls={true}
            slides={slides}
            renderContent={({ slide, index }) => (
              <SliderContent slide={slide} index={index} />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
