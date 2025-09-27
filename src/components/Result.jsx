import React, { useEffect, useState } from "react";
import helper, { replaceHeadingStars } from "../helper";

const Result = ({ ans, index, totalResult, type }) => {
  // console.log(ans, key);

  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (helper(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, []);

  return (
    <div>
      {index == 0 && totalResult > 1 ? (
        <span className=" pt-2 text-xl block text-pink-400">{answer}</span>
      ) : heading ? (
        <span className=" pt-2  text-lg block text-white">{answer}</span>
      ) : (
        <span className={type == "q" ? "pl-1" : "pl-10"}>{answer}</span>
      )}
    </div>
  );
};

export default Result;
