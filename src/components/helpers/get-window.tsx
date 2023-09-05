'use client'

import React, { useEffect, useState } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<any>({
        width: null,
        height: null,
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return windowSize;
}

export default useWindowSize;
