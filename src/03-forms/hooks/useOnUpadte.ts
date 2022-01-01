import { useEffect, useRef } from "react";

export const useOnUpdate = (callback: any, dependencies: any) => {
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    return callback();
  }, dependencies);
};
