import React, { useState, forwardRef, ImgHTMLAttributes } from 'react';
import images from '~/assets/images';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
    className?: string;
    fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ src, alt, className = '', fallback: customFallback = images.noImage, ...props }, ref) => {
        const [fallback, setFallback] = useState<string>('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={`overflow-hidden ${className}`}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    }
);

Image.displayName = 'Image';

export default Image;
