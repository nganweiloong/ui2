"use client";

import type { Icon } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center gap-1 rounded-lg border px-2 text-sm leading-none transition-colors select-none has-[[data-slot=chip-action]]:pr-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>svg]:size-4",
  {
    variants: {
      variant: {
        input: "border-neutral-300 bg-neutral-50 text-muted-foreground",
        emerald:
          "border-emerald-500 text-emerald-700 hover:bg-emerald-50 aria-selected:border-emerald-700 aria-selected:bg-emerald-100",
        pizazz:
          "border-pizazz-500 text-pizazz-700 hover:bg-pizazz-50 aria-selected:border-pizazz-700 aria-selected:bg-pizazz-100",
        violet:
          "border-electric-500 text-electric-700 hover:bg-electric-50 aria-selected:border-electric-700 aria-selected:bg-electric-100",
        picton:
          "border-picton-500 text-picton-700 hover:bg-picton-50 aria-selected:border-picton-700 aria-selected:bg-picton-100",
        azalea:
          "border-azalea-500 text-azalea-700 hover:bg-azalea-50 aria-selected:border-azalea-700 aria-selected:bg-azalea-100",
        carnelian:
          "border-carnelian-500 text-carnelian-700 hover:bg-carnelian-50 aria-selected:border-carnelian-700 aria-selected:bg-carnelian-100",
      },
      size: {
        sm: "h-5",
        md: "h-6",
        lg: "h-8",
      },
    },
    defaultVariants: {
      variant: "input",
      size: "md",
    },
  },
);

const ChipContext = createContext<
  VariantProps<typeof chipVariants> & { disabled?: boolean }
>({
  variant: "input",
  size: "md",
});

function Chip({
  children,
  className,
  disabled,
  selected,
  size,
  variant,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof chipVariants> & {
    selected?: boolean;
    disabled?: boolean;
  }) {
  return (
    <div
      data-slot="chip"
      className={cn(chipVariants({ variant, size }), className)}
      aria-disabled={disabled}
      aria-selected={selected}
      {...props}
    >
      <ChipContext.Provider value={{ variant, size, disabled }}>
        {children}
      </ChipContext.Provider>
    </div>
  );
}

function ChipAction({
  className,
  ...props
}: React.ComponentProps<"button"> & { children?: React.ReactElement<Icon> }) {
  const { disabled, variant } = useContext(ChipContext);

  return (
    <button
      data-slot="chip-action"
      className={cn(
        "inline-flex size-5 items-center justify-center rounded-full p-[2px] only:ml-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        {
          "hover:bg-neutral-100 focus-visible:bg-neutral-100 active:bg-neutral-200":
            variant === "input",
          "hover:bg-emerald-100 focus-visible:bg-emerald-100 active:bg-emerald-200":
            variant === "emerald",
          "hover:bg-pizazz-100 focus-visible:bg-pizazz-100 active:bg-pizazz-200":
            variant === "pizazz",
          "hover:bg-electric-100 focus-visible:bg-electric-100 active:bg-electric-200":
            variant === "violet",
          "hover:bg-picton-100 focus-visible:bg-picton-100 active:bg-picton-200":
            variant === "picton",
          "hover:bg-azalea-100 focus-visible:bg-azalea-100 active:bg-azalea-200":
            variant === "azalea",
          "hover:bg-carnelian-100 focus-visible:bg-carnelian-100 active:bg-carnelian-200":
            variant === "carnelian",
        },
        className,
      )}
      disabled={props.disabled ?? disabled}
      {...props}
    />
  );
}

export { Chip, ChipAction, chipVariants };
