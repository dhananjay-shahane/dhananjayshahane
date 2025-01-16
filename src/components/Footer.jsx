import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import FooterImg from "../assets/img/footer.jpg";
import { quotes } from "../constant/constant"

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const country = "India";


  const [quote, setQuote] = useState("");
  const [time, setTime] = useState("");

  // Update the quote every 5 seconds
  useEffect(() => {
    const changeQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    changeQuote(); // Set initial quote
    const intervalId = setInterval(changeQuote, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Update the time every minute
  useEffect(() => {
    const updateTime = () => {
      const current = new Date();
      const formattedTime = current.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    updateTime(); // Set initial time
    const timeInterval = setInterval(updateTime, 60000); // Update time every 60 seconds

    return () => clearInterval(timeInterval); // Cleanup on component unmount
  }, []);

  const footerStyle = {
    position: "absolute",
    bottom: "0",
    right: "0",
    left: "0",
    height: "5px",
    backgroundImage:
      "linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)",
  };

  return (
    <footer className="bg-white relative"  style={footerStyle}>
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-20 pt-5 lg:grid-cols-12 lg:gap-5">
          <div className="flex flex-col items-start justify-center space-y-5 text-center lg:col-span-7 lg:text-start">
            <div className="w-full space-y-2.5">
              <h2 className="font-epilogue text-2xl font-semibold leading-10 text-neutral-900 md:text-4.5xl">
                Got a project? Ready for a competitive edge?
              </h2>
              <p className="text-base text-neutral-500 lg:text-xl">
                It's <span className="uppercase">{time}</span>, Something on your
                mind? Get in touch &amp; let's discuss over a coffee!!
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5 md:flex-row lg:justify-start">
              <Link to="/contact"
                className="group relative inline-block h-[44px] w-full select-none overflow-hidden rounded-lg border-neutral-900 text-lg uppercase text-neutral-900 md:h-[48px] md:w-[200px]"
              >
                <div className="size-[inherit] overflow-hidden rounded-lg border border-neutral-900 bg-white transition-transform duration-[1.5s] ease-out group-hover:scale-[1]">
                  <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-neutral-200/80 group-hover:translate-y-[10px] group-hover:rounded-tl-full group-hover:rounded-tr-full transition-all duration-[1s]"></span>
                  <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-neutral-600/20 group-hover:translate-y-[10px] group-hover:rounded-tl-full group-hover:rounded-tr-full transition-all duration-[1s]"></span>
                  <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-white group-hover:translate-y-[10px] group-hover:rounded-tl-full group-hover:rounded-tr-full transition-all duration-[1s]"></span>
                </div>
                <span className="absolute inset-0 z-10 m-auto flex w-4/5 items-center justify-center text-base font-semibold transition-all group-hover:-translate-y-1/3 group-hover:opacity-0">
                  Schedule a call
                </span>
                <span className="absolute inset-0 z-10 m-auto flex w-4/5 translate-y-1/3 items-center justify-center text-base font-semibold opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  Schedule a call
                </span>
              </Link>
              <a
                href="mailto:dhananjayshahane@yahoo.com"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-neutral-900 text-neutral-200 active:scale-[.95] w-full px-10 py-3 text-sm font-semibold uppercase md:w-auto md:text-base"
                aria-label="Mail"
              >
                <span>Send a mail</span>
                <div className="skew-12 absolute inset-0 flex h-full w-full translate-x-[-110%] transform justify-center group-hover:translate-x-[100%] duration-1000">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </a>
            </div>
          </div>
          <blockquote className="relative flex w-full flex-col justify-start text-start lg:col-span-5">
            <p className="mb-14 text-start quotes-text font-caveat text-5xl text-neutral-900 md:mb-8 md:text-xl">
              {quote.text} <br />
              <span className="text-neutral-500 text-3xl">— {quote.author}</span>
            </p>
          </blockquote>
        </div>
        <div className="footer_footerWrapper text-center py-5">
          <p className="footer_footerText text-center">
            Copyright © {currentYear} All rights reserved | Made With ❤️&amp;🧠 In{" "}
            <span className="fw-bolder text-dark">{country}</span>
          </p>
        </div>
      </div>
      <img className="max-w-4xl mx-auto absolute -bottom-38 left-0 right-0" src={FooterImg} alt="footer-img" />
    </footer>
  );
};

export default Footer;
