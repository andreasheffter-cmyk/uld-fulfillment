import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display text-[0.95rem] font-bold tracking-tight transition-[background-color,color,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-crimson text-cream hover:bg-crimson-dark",
        navy: "bg-navy text-cream hover:bg-navy-mid",
        outline:
          "bg-transparent text-cream ring-1 ring-cream/40 hover:bg-cream/10",
        ghost: "bg-transparent text-ink hover:bg-sand",
        paper: "bg-paper text-navy hover:bg-cream",
      },
      size: {
        sm: "h-10 rounded-full px-5",
        md: "h-11 rounded-full px-6",
        lg: "h-12 rounded-full px-7",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
