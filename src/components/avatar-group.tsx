"use client";

import type { VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { Avatar, avatarVariants } from "@/components/avatar";
import { cn } from "@/lib/utils";

const AvatarGroupContext = createContext<VariantProps<typeof avatarVariants>>({
  variant: "default",
  size: "md",
});

function AvatarGroup({
  children,
  className,
  overlapDirection = "ltr",
  size,
  variant,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof avatarVariants> & { overlapDirection?: "ltr" | "rtl" }) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "flex -space-x-2 px-4 py-2",
        overlapDirection === "rtl" && "flex-row-reverse space-x-reverse",
        className,
      )}
      {...props}
    >
      <AvatarGroupContext.Provider value={{ variant, size }}>
        {children}
      </AvatarGroupContext.Provider>
    </div>
  );
}

function AvatarGroupItem({
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<typeof Avatar>) {
  const context = useContext(AvatarGroupContext);

  return (
    <Avatar
      data-slot="avatar-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn("outline-2 outline-background", className)}
      variant={context.variant || variant}
      size={context.size || size}
      {...props}
    />
  );
}

export { AvatarGroup, AvatarGroupItem };
