import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  status,
}) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const statusColors = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
  };

  return (
    <div className="relative inline-block">
      <div
        className={`
          ${sizes[size]}
          rounded-full overflow-hidden bg-gray-100
        `}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-primary-100 text-primary-600">
            {alt.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      {status && (
        <span
          className={`
            absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white
            ${statusColors[status]}
          `}
        />
      )}
    </div>
  );
};
