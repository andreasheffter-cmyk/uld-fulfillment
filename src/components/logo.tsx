import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

function CargoSquare({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      <rect x="3.5" y="3.5" width="25" height="25" stroke="#D13C22" strokeWidth="7" />
    </svg>
  );
}

function Mark({
  inverted = false,
  size = "md",
}: {
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const type =
    size === "lg"
      ? "text-[2.2rem] md:text-[2.45rem]"
      : size === "sm"
        ? "text-[1.45rem]"
        : "text-[1.75rem]";
  const box =
    size === "lg" ? "mt-[0.07em] h-[0.62em] w-[0.62em]" : "mt-[0.07em] h-[0.62em] w-[0.62em]";

  return (
    <span className="flex items-start gap-[0.13em] leading-none">
      <span
        className={cn(
          "font-sans font-black tracking-[-0.05em]",
          type,
          inverted ? "text-cream" : "text-navy",
        )}
      >
        ULD
      </span>
      <CargoSquare className={cn("shrink-0", box)} />
    </span>
  );
}

function Descriptor({
  inverted = false,
  lines = 2,
}: {
  inverted?: boolean;
  lines?: 2 | 3;
}) {
  return (
    <span
      className={cn(
        "font-sans font-semibold leading-[1.15]",
        lines === 3 ? "text-[13px]" : "text-[11px]",
        inverted ? "text-cream" : "text-navy",
      )}
    >
      {lines === 3 ? (
        <>
          United
          <br />
          Logistics
          <br />
          & Distribution
        </>
      ) : (
        <>
          United Logistics
          <br />
          & Distribution
        </>
      )}
    </span>
  );
}

export function Logo({
  inverted = false,
  compact = false,
  variant = "compact",
}: {
  inverted?: boolean;
  compact?: boolean;
  variant?: "horizontal" | "compact" | "mark";
}) {
  const mode = compact ? "mark" : variant;

  return (
    <Link
      to="/"
      className="group flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crimson"
      aria-label="ULD United Logistics & Distribution – Startseite"
    >
      {mode === "horizontal" ? (
        <span className="flex items-center gap-3">
          <Mark inverted={inverted} size="lg" />
          <Descriptor inverted={inverted} lines={3} />
        </span>
      ) : mode === "mark" ? (
        <Mark inverted={inverted} size="sm" />
      ) : (
        <span className="flex flex-col gap-[0.35rem]">
          <Mark inverted={inverted} size="md" />
          <Descriptor inverted={inverted} lines={2} />
        </span>
      )}
    </Link>
  );
}
