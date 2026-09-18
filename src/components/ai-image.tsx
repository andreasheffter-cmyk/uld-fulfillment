import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** EU AI Act Art. 50 – visible disclosure on synthetic media. */
export const AI_IMAGE_LABEL = "KI generiert / AI generated";

export function AiImageBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute bottom-2 left-2 z-10 max-w-[calc(100%-1rem)] bg-navy-mid/80 px-1.5 py-1 font-sans text-[10px] font-semibold leading-none tracking-wide text-cream backdrop-blur-[2px] md:text-[11px]",
        className,
      )}
    >
      {AI_IMAGE_LABEL}
    </span>
  );
}

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
        data-ai-generated="true"
        className={cn(fill && "size-full object-cover", className)}
        {...props}
      />
      <AiImageBadge />
    </span>
  );
}
