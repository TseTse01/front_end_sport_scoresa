"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    fallback?: React.ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
    src,
    alt,
    width,
    height,
    fallback,
}) => {
    const [imgError, setImgError] = useState(false);

    return (
        <>
            {imgError ? (
                fallback || <span>{alt}</span>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    onError={() => setImgError(true)}

                />
            )}
        </>
    );
};

export default ImageWithFallback;