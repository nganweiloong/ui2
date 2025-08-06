"use client";

import { CircleIcon } from "@phosphor-icons/react/dist/ssr/Circle";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { cn } from "@/lib/utils";

const radioVariants = cva(
  "peer aspect-square shrink-0 rounded-full border border-input text-primary-foreground outline-hidden transition-[color,box-shadow] hover:not-disabled:border-primary focus-visible:ring-primary-hover/20 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:outline-danger data-[state=checked]:border-primary data-[state=checked]:bg-primary dark:bg-input/30",
  {
    variants: {
      size: {
        sm: "size-4 focus-visible:ring-1 [&_svg]:size-2",
        md: "size-6 focus-visible:ring-2 [&_svg]:size-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const RadioGroupContext = createContext<VariantProps<typeof radioVariants>>({
  size: "md",
});

function RadioGroup({
  children,
  className,
  size,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioVariants>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    >
      <RadioGroupContext.Provider value={{ size }}>
        {children}
      </RadioGroupContext.Provider>
    </RadioGroupPrimitive.Root>
  );
}

function RadioGroupItem({
  className,
  size: sizeProp,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioVariants>) {
  const context = useContext(RadioGroupContext);
  const size = sizeProp ?? context.size;

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioVariants({ size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon
          weight="fill"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
