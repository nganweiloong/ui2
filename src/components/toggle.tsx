"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-primary focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-danger/20 data-[state=on]:bg-primary-50 data-[state=on]:text-primary dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-secondary-foreground hover:bg-secondary-hover",
        outline:
          "border border-input bg-transparent text-secondary-foreground shadow-xs hover:bg-secondary-hover data-[state=on]:border-primary",
      },
      size: {
        sm: "h-8 min-w-8 px-1.5 [&_svg:not([class*='size-'])]:size-4",
        md: "h-10 min-w-10 px-2 [&_svg:not([class*='size-'])]:size-5",
        lg: "h-12 min-w-12 px-2.5 [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Toggle({
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
