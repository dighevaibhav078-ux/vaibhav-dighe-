import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'landscape' | 'portrait' | 'square' | 'item';
}

export default function SafeImage({ 
  src, 
  alt, 
  className, 
  fallbackType = 'landscape',
  ...props 
}: SafeImageProps) {
  const [error, setError] = useState(false);

  // Generate a consistent seed based on the src string to avoid flickering on re-renders
  const getSeed = (input: string | undefined) => {
    if (!input) return 'dairy';
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString();
  };

  const handleError = () => {
    setError(true);
  };

  if (error || !src) {
    const seed = getSeed(src);
    let dimensions = "1920/1080";
    if (fallbackType === 'square') dimensions = "1000/1000";
    if (fallbackType === 'portrait') dimensions = "1080/1920";
    if (fallbackType === 'item') dimensions = "800/800";

    return (
      <img
        src={`https://picsum.photos/seed/${seed}/${dimensions}`}
        alt={alt ? `${alt} (Placeholder)` : 'Placeholder'}
        className={`${className} opacity-80 mix-blend-multiply`}
        referrerPolicy="no-referrer"
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
