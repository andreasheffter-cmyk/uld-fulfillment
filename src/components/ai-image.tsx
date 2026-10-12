import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type AiImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  wrapperClassName?: string;
};

export function AiImage({
  fill = false,
  className,
  wrapperClassName,
  alt,
  ...props
}: AiImageProps) {
  return (
    <span
      className={cn(
        "relative block overflow-hidden",
        fill && "absolute inset-0",
        wrapperClassName,
      )}
    >
      <img
        alt={alt ?? ""}
        className={cn(fill && "size-full object-cover", className)}
        {...props}
      />
    </span>
  );
}
