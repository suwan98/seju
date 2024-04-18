import {Dispatch, SetStateAction} from "react";
import {debounce} from "lodash";

function getInterSectionObserver(
  setState: Dispatch<SetStateAction<string>>,
  rootMargin: string = "0px"
) {
  const observer = new IntersectionObserver(
    debounce((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(entry.target.id);
        }
      });
    }, 150), // 150ms 딜레이,
    {
      rootMargin: rootMargin,
      threshold: 1,
    }
  );

  return observer;
}

export default getInterSectionObserver;
