import {Dispatch, SetStateAction} from "react";
import {debounce} from "lodash";

function getInterSectionObserver(setState: Dispatch<SetStateAction<string>>) {
  const observer = new IntersectionObserver(
    debounce((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(entry.target.id);
        }
      });
    }, 300) // 300ms 딜레이
  );

  return observer;
}

export default getInterSectionObserver;
