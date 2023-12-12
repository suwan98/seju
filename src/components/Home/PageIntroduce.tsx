"use client";

import DESCRPTION from "@/constants/DESCRPTION";
import {useEffect, useState} from "react";

function PageIntroduce() {
  const [desc, setDesc] = useState("");
  const [descIndex, setDescIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTexts = 750;

    if (!isDeleting && desc.length === DESCRPTION[descIndex].length) {
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && desc.length === 0) {
      setIsDeleting(false);
      setDescIndex((prevIndex) => (prevIndex + 1) % DESCRPTION.length);
    }

    const interval = setInterval(
      () => {
        setDesc((currDesc) =>
          isDeleting
            ? currDesc.slice(0, currDesc.length - 1)
            : DESCRPTION[descIndex].slice(0, currDesc.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(interval);
  }, [desc, descIndex, isDeleting]);

  return (
    <>
      <div>{desc}</div>
    </>
  );
}

export default PageIntroduce;
