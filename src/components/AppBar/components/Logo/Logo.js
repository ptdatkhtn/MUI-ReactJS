import React from "react";

const Logo = props => (
  <svg
    width="1em"
    height="1em"
    aria-label="Hacker News"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width="100%" height="100%" rx="15%" fill="#fff" />
    <path fill="#f60" d="M124 91h51l81 162 81-164h51L276 293v136h-40V293z" />
  </svg>
);

export default Logo;
