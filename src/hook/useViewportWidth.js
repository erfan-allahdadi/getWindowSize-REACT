import { useCallback, useState } from "react";

const browser = typeof window !== 'undefined';

export function useViewportWidth() {
    const [width , setWidth] = useState(browser ? window.innerHeight: 0);
    
    const setSize = useCallback(() => {
        setWidth(window.innerWidth || 0);
    })

    window.addEventListener('resize', setSize, {passive: true});

    return width;
}
