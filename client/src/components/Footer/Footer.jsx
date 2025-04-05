import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router";
const nav = [
  {
    title: "Home",
    items: [
      { title: "Categories", to: "/categories" },
      { title: "Devices", to: "/devices" },
      { title: "Pricing", to: "/pricing" },
      { title: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Movies",
    items: [
      { title: "Genres", to: "/movies/genres" },
      { title: "Trending", to: "/movies/trending" },
      { title: "New Release", to: "/movies/new-release" },
      { title: "Popular", to: "/movies/popular" },
    ],
  },
  {
    title: "Shows",
    items: [
      { title: "Genres", to: "/shows/genres" },
      { title: "Trending", to: "/shows/trending" },
      { title: "New Release", to: "/shows/new-release" },
      { title: "Popular", to: "/shows/popular" },
    ],
  },
  {
    title: "Subscription",
    items: [
      { title: "Plans", to: "/subscription/plans" },
      { title: "Features", to: "/subscription/features" },
    ],
  },
  {
    title: "Support",
    items: [{ title: "Contact Us", to: "/support/contact" }],
  },
  {
    title: "Connect With Us",
    items: [
      { title: "Facebook", to: "https://facebook.com" },
      { title: "Twitter", to: "https://twitter.com" },
      { title: "LinkedIn", to: "https://linkedin.com" },
    ],
  },
];
const policy = [
  {
    title: "Terms of Use",
    to: "/terms",
  },
  {
    title: "Privacy Policy",
    to: "/policy",
  },
  {
    title: "Cookie Policy",
    to: "/cookie",
  },
];

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__inner}>
          <div className={s.footer__nav}>
            {nav.map((list, index) => {
              return (
                <div className={s.footer__list_wrapper}>
                  <span className={s.footer__list_title}>{list.title}</span>
                  <ul className={s.footer__list}>
                    {list.items.map((e) => (
                      <li className={s.footer__list_item}>
                        <Link to={e.to}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={s.footer__law}>
            <p className={s.footer__rights}>
              @2023 streamvib, All Rights Reserved
            </p>
            <ul className={s.footer__policy}>
              {policy.map((e, index) => (
                <>
                  <li className={s.footer__policy_item}>
                    <Link to={e.to}>{e.title}</Link>
                  </li>
                  {index !== policy.length - 1 && (
                    <div className={s.footer__policy_gap}></div>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
