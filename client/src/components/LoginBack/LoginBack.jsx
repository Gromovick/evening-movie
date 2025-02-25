import React, { useEffect, useRef, useState } from "react";

import s from "./LoginBack.module.css";
const LoginBack = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const powerRef = useRef(0);
  const [power, setPower] = useState(0);
  const speed = 0.025;
  const animationRef = useRef(null);
  const linesRef = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = {
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY / 2.5,
      };
    };

    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [windowWidth]);

  useEffect(() => {
    const animate = () => {
      // console.log("amim");

      const dx = mouse.current.x - position.current.x;
      const dy = mouse.current.y - position.current.y;

      position.current.x += dx * speed;
      position.current.y += dy * speed;

      powerRef.current = position.current.x;

      // console.log(dx * speed);

      // powerRef.current += 10;
      setPower(powerRef.current * 0.5);
      // setPower((prev) => (prev + 0.1) * 0 + powerRef.current * 0.01);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.backWrapper}>
        <div
          className={s.backGrid}
          style={{ "--power": `${powerRef.current}px` }}
        >
          {Array.from(Array(10).keys()).map((e) => (
            <>
              <div
                className={s.backLine}
                key={e}
                style={{
                  transform: `translateY(${
                    e % 2 === 0 ? -power : power
                  }px) rotate(${e % 2 === 0 ? 180 : 0}deg)`,
                }}
                ref={(el) => (linesRef.current[e] = el)}
              >
                {[
                  "poster_1.jpg",
                  "poster_2.jpg",
                  "poster_1.jpg",
                  "poster_2.jpg",
                  "poster_1.jpg",
                  "poster_2.jpg",
                ].map((poster, index) => (
                  <img
                    key={poster + index}
                    className={s.poster}
                    src={`/img/login/${poster}`}
                    alt=""
                  />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginBack;
