import type { SimpleIcon as SimpleIconType } from "simple-icons";

interface SimpleIconProps {
  icon: SimpleIconType;
  size?: number;
  className?: string;
  /** Override fill color. Defaults to the icon's brand hex. */
  color?: string;
}

export function SimpleIcon({
  icon,
  size = 24,
  className,
  color,
}: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color ?? `#${icon.hex}`}
      className={className}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}
