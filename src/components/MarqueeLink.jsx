import React from "react";
import { Link } from "react-router-dom";

const MarqueeLink = () => {
  return (
    <Link to="/contact">
      <div className="rfm-marquee-container cursor-pointer shadow-sm rounded-full border border-transparent bg-white p-2 text-neutral-900 transition-transform hover:scale-105 hover:border hover:border-neutral-300 active:scale-95">
        <div
          className="rfm-marquee"
          style={{
            "--play": "running",
            "--direction": "normal",
            "--duration": "6s",
            "--delay": "0s",
            "--iteration-count": "infinite",
            "--min-width": "100%",
          }}
        >
          <div className="rfm-initial-child-container">
            <div className="rfm-child">
              <div className="relative flex select-none items-center py-1">
                <div className="absolute size-4 rounded-full bg-green-400"></div>
                <div className="absolute size-4 animate-ping rounded-full bg-green-300"></div>
                <p className="ml-8 pt-0.5 font-epilogue leading-none">
                  AVAILABLE FOR FREELANCE WORK
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rfm-marquee"
          style={{
            "--play": "running",
            "--direction": "normal",
            "--duration": "6s",
            "--delay": "0s",
            "--iteration-count": "infinite",
            "--min-width": "100%",
          }}
        >
          <div className="rfm-child">
            <div className="relative flex select-none items-center py-1">
              <div className="absolute size-4 rounded-full bg-green-400"></div>
              <div className="absolute size-4 animate-ping rounded-full bg-green-300"></div>
              <p className="ml-8 pt-0.5 font-epilogue leading-none">
                AVAILABLE FOR FREELANCE WORK
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarqueeLink;
