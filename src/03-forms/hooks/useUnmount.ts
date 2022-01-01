import { useEffect, useRef } from "react";

export const useOnUnmount = (fn:any) => {
    const fnRef = useRef(fn);
    fnRef.current = fn;

    useEffect(
        () => () => {
            fnRef.current();
        },[]
    );
};
