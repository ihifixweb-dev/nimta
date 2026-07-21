import Image from 'next/image';

type ImgSlotProps = {
  label: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  role?: string;
  priority?: boolean;
  sizes?: string;
};

export default function ImgSlot({
  label,
  src,
  alt,
  children,
  className = '',
  style,
  role = 'img',
  priority = false,
  sizes = '(max-width: 900px) 100vw, 50vw',
}: ImgSlotProps) {
  if (src) {
    return (
      <div
        className={`img-slot img-slot--filled${className ? ` ${className}` : ''}`}
        style={style}
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes={sizes}
          className="img-slot-photo"
        />
      </div>
    );
  }

  return (
    <div
      className={`img-slot${className ? ` ${className}` : ''}`}
      role={role}
      aria-label={alt ?? label}
      style={style}
    >
      {children ?? (
        <svg viewBox="0 0 48 48">
          <rect x="4" y="8" width="40" height="28" rx="2" />
          <circle cx="24" cy="22" r="7" />
        </svg>
      )}
      <span>{label}</span>
    </div>
  );
}
