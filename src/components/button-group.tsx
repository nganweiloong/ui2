"use client";

import type { VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { Button, buttonVariants } from "@/components/button";
import { cn } from "@/lib/utils";

const ButtonGroupContext = createContext<VariantProps<typeof buttonVariants>>(
  {},
);

function ButtonGroup({
  children,
  className,
  size,
  variant = "secondary",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonVariants>) {
  return (
    <div
      data-slot="button-group"
      className={cn(
        "isolate inline-flex rounded-lg",
        variant !== "ghost" && "shadow-xs",
        variant === "dashed" ? "space-x-px" : "-space-x-px",
        className,
      )}
      {...props}
    >
      <ButtonGroupContext.Provider value={{ variant, size }}>
        {children}
      </ButtonGroupContext.Provider>
    </div>
  );
}

function ButtonGroupItem({
  className,
  variant: variantProp,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size">) {
  const context = useContext(ButtonGroupContext);
  const variant = context.variant || variantProp;

  return (
    <Button
      data-slot="button-group-item"
      data-variant={variant}
      data-size={context.size}
      className={cn(
        "relative shadow-none focus-visible:z-10",
        variant !== "ghost" &&
          "rounded-none first:rounded-l-lg last:rounded-r-lg",
        className,
      )}
      variant={variant}
      size={context.size}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupItem };
