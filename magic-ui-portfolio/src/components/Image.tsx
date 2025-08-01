import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    className,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            width={width}
            height={height}
            className={className}
            {...props}
        />
    );
};
