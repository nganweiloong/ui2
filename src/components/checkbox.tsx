"use client";

import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { MinusIcon } from "@phosphor-icons/react/dist/ssr/Minus";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer shrink-0 border border-input bg-background hover:border-primary focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none data-[state-checked]:hover:outline data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:hover:outline-primary-hover/20 data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:hover:outline-primary-hover/20",
  {
    variants: {
      size: {
        sm: "size-4 rounded-[4px] data-[state=checked]:hover:outline data-[state=indeterminate]:hover:outline",
        md: "size-6 rounded-[6px] data-[state=checked]:hover:outline-2 data-[state=indeterminate]:hover:outline-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
function Checkbox({
  className,
  size,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>) {
  const IndicatorIcon =
    props.checked === "indeterminate" ? MinusIcon : CheckIcon;

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <IndicatorIcon
          weight="bold"
          className={size === "sm" ? "size-3" : "size-5"}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
