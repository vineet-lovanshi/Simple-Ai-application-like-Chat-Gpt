import React from "react";

const helper = (str) => {
  return /^(\*)(\*)(.*)\*$/.test(str);
};

const replaceHeadingStars = (str) => {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
};
export default helper;
export { replaceHeadingStars };
