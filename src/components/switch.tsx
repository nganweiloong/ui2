"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  "peer inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-100 data-[state=unchecked]:hover:bg-neutral-200 dark:data-[state=unchecked]:bg-input/80",
  {
    variants: {
      size: {
        sm: "h-4 w-[30px] border-2",
        md: "h-6 w-10 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const thumbVariants = cva(
  "pointer-events-none block rounded-full border-white ring-0 transition-transform data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-neutral-50",
  {
    variants: {
      size: {
        sm: "size-3 border-3 data-[state=checked]:translate-x-3.5",
        md: "size-4 border-4 data-[state=checked]:translate-x-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function Switch({
  className,
  size,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={thumbVariants({ size })}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
