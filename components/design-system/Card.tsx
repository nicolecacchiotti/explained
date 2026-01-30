"use client";

import { ReactNode } from "react";

export interface CardProps {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: "default" | "interactive" | "comingSoon";
  children: ReactNode;
  className?: string;
}

export function Card({
  href,
  target,
  rel,
  onClick,
  variant = "default",
  children,
  className = "",
}: CardProps) {
  const baseClasses =
    "relative block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300";
  const variantClasses = {
    default: "hover:border-white/20 hover:bg-zinc-900/70",
    interactive:
      "group hover:scale-[1.02] hover:border-white/20 hover:bg-zinc-900/70",
    comingSoon: "", // No hover effects for coming soon
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: "4/3" | "16/9" | "1/1";
  placeholder?: ReactNode;
  onError?: () => void;
  children?: ReactNode;
}

export function CardImage({
  src,
  alt,
  aspectRatio = "4/3",
  placeholder,
  onError,
  children,
}: CardImageProps) {
  let aspectClass = "aspect-[4/3]";
  if (aspectRatio === "16/9") aspectClass = "aspect-video";
  if (aspectRatio === "1/1") aspectClass = "aspect-square";

  return (
    <div
      className={`relative ${aspectClass} w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20`}
      style={{ isolation: 'isolate' }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ borderRadius: 'inherit' }}
          onError={onError}
        />
      ) : (
        placeholder
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/70 to-transparent pointer-events-none" style={{ borderRadius: 'inherit' }} />
      {children}
    </div>
  );
}

export interface CardBadgeProps {
  children: ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  variant?: "default" | "glass";
}

export function CardBadge({
  children,
  position = "top-right",
  variant = "glass",
}: CardBadgeProps) {
  const positionClasses = {
    "top-left": "left-4 top-4",
    "top-right": "right-4 top-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  const variantClasses = {
    default: "bg-white text-black",
    glass: "border border-white/20 bg-black/90 text-white backdrop-blur-sm",
  };

  return (
    <div className={`absolute ${positionClasses[position]}`}>
      <span
        className={`rounded-full px-3 py-1 text-base font-medium ${variantClasses[variant]}`}
      >
        {children}
      </span>
    </div>
  );
}

export interface CardContentProps {
  children: ReactNode;
  padding?: "small" | "medium" | "large";
}

export function CardContent({
  children,
  padding = "medium",
}: CardContentProps) {
  const paddingClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  return <div className={paddingClasses[padding]}>{children}</div>;
}

export interface CardMetaProps {
  items: string[];
  separator?: string;
}

export function CardMeta({ items, separator = "•" }: CardMetaProps) {
  return (
    <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && <span className="ml-2">{separator}</span>}
        </span>
      ))}
    </div>
  );
}

export interface CardTitleProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
  className?: string;
}

export function CardTitle({
  children,
  as: Component = "h3",
  size = "medium",
  className = "",
}: CardTitleProps) {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  return (
    <Component className={`mb-2 font-semibold text-white ${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}

export interface CardDescriptionProps {
  children: ReactNode;
  clamp?: number;
}

export function CardDescription({ children, clamp = 3 }: CardDescriptionProps) {
  return (
    <p className={`line-clamp-${clamp} text-sm leading-relaxed text-zinc-400`}>
      {children}
    </p>
  );
}

export interface CardActionProps {
  children: ReactNode;
  icon?: ReactNode;
}

export function CardAction({ children, icon }: CardActionProps) {
  return (
    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
      <span>{children}</span>
      {icon || (
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </div>
  );
}
