import { useRef, useLayoutEffect, useState, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";

const useResizeObserver = ({
  observeNode
}: {
  observeNode?: React.RefObject<HTMLElement>;
}) => {
  const [entry, setEntry] = useState();
  const [node, setNode] = useState(null);
  const observer = new ResizeObserver(([entry]) => {
    setEntry(entry)
  });

  useLayoutEffect(() => {
    if (observeNode?.current) {
      observer?.observe(observeNode?.current);
    }
    return () => {
      observer?.disconnect();
    };
  }, [observeNode]);

  return entry;
};

export default useResizeObserver;
