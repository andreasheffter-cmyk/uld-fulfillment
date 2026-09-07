import { cn } from "@/lib/cn";

export function BrandBox({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const cut = size === "lg" ? "cut-br-lg" : "cut-br";
  const notch = size === "lg" ? "size-9 border-[3px]" : "size-[1.35rem] border-2";

  return (
    <div className={cn("relative h-full", className)}>
      <div className={cn("h-full overflow-hidden", cut)}>{children}</div>
      <span
        className={cn("pointer-events-none absolute right-0 bottom-0 border-crimson", notch)}
        aria-hidden
      />
    </div>
  );
}
